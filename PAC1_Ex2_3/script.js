const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
// seleccionem el text de les pelis
const films = document.querySelectorAll('.film');

// Agafem el valor de la moneda seleccionada per l'usuari:
const currency = document.getElementById('currency-one');
// Per si l'api dona algun error poder mostrar-ho a l'usuari
const apiresult = document.getElementById('apiresult');

let ticketPrice = movieSelect.value;

populateUI();

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}
// Update total an count at the end of the DOM
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    // Copy selected seats in arr + Map through array + return a new array indexes
    const seatsIndex = [...selectedSeats].map(function(seat) {
        return [...seats].indexOf(seat);
    });
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    
    const selectedSeatsCount = selectedSeats.length;

    // Per completar l'exercici guardem al localstorage el num de seients per calcular el preu després en funció de la moneda i no haver de crear més codi/funcions
    localStorage.setItem('numOfSeats', JSON.stringify(selectedSeatsCount));
    count.innerText = selectedSeatsCount;
    // total.innerText = selectedSeatsCount * ticketPrice;
    // Comento la línea anterior per clacular el preu en funció de la moneda
    calculate();
}

// Get data from localstorage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            } 
        });
    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    count.innerText = localStorage.getItem('numOfSeats');
    total.innerText = localStorage.getItem('numOfSeats') * localStorage.getItem('selectedMoviePrice');
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }

}

// Modify the movie selector
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

container.addEventListener('click', function(e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

const calculate = async () => {
    const one = currency.value;
    // fem la crida de la consulta, es necessari un try/catch
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/99e6ff88606075edbf61c0ef/latest/${one}`)
        // fem la conversió a json si l'estat es 200 que és l'estat d'èxit.
        if (response.status === 200) {
            const datos = await response.json();
            const cambio = datos.conversion_rates["USD"];
            // Calculo el preu de la película seleccionada en el pick a movie.
            const precioCambiado = movieSelect.value * cambio;
            // Actualitzo el localstorage amb el nou preu en funció de la moneda seleccionada
            localStorage.setItem('selectedMoviePrice', precioCambiado);
            // cambio el preu de totes les películes en el desplegable de pick a movie
            films.forEach(function (item, index, arr) {
                // Cada option li poso dinamicament els valors convertits dels preus i monedas
                arr[index].innerHTML = "<option class='film' value="+ arr[index].value*cambio +" title='"+ arr[index].title +"'>" + arr[index].title + " ("+ arr[index].value*cambio +" "+ one +")</option>"; 
            });
            // Obtinc el num de seients del localstorage
            const selectedSeats = localStorage.getItem('selectedSeats');
            const sillas = localStorage.getItem('numOfSeats');
            const totalfinalconversion = sillas * precioCambiado;
            total.innerText = `${totalfinalconversion}`;            
        } else if (response.status === 404) {
            apiresult.innerText = `Moneda no encontrada`;
        } else {
            apiresult.innerText = `Error en la respuesta de la llamada API. Error num. ${response.status}`;
        }
    } catch (error) {
        apiresult.innerText(error);
    }
}

// Change currency
currency.addEventListener('change', function(e) {
    calculate();
});