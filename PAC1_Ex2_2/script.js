// function calculate() {
//     fetch('items.json')
//     .then(res => res.json())
//     .then (data => (document.body.innerHTML= data[0].text));
// }
// Prenem els elements d'on em de obtenir les dades introduides per l'usuari i on els hi hem de mostrar un resultat
const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const apiresult = document.getElementById('resultAPI');
const errorOne = document.getElementById('errorOne');
const errorTwo = document.getElementById('errorTwo');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// A més a més de l'exercici 2, afegir les noves condicions dpes del video
const calculate = async () => {
    const one = currencyEl_one.value;
    const two = currencyEl_two.value;
    const uno = amountEl_one.value;
    const dos = amountEl_two.value;
    // fem la crida de la consulta, es necessari un try/catch
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/99e6ff88606075edbf61c0ef/latest/${one}`)
        console.log(response);
        // fem la conversió a json si l'estat es 200 que és l'estat d'èxit.
        if (response.status === 200) {
            const datos = await response.json();
            if (negative(uno, dos) === true) {
                errorOne.innerText = ``;
                errorTwo.innerText = ``;
                const rate = datos.conversion_rates[two];
                const calculationResult = datos.conversion_rates[two] * amountEl_one.value;
                rateEl.innerText = `1 ${one} = ${rate} ${two}`;
                amountEl_two.value = `${calculationResult}`;
            } else if (negative(uno, dos) === uno) {
                errorOne.innerText = `Valor 1 no puede ser negativo`;
            } else if (negative(uno, dos) === dos) {
                errorTwo.innerText = 'Valor 2 no puede ser negativo';
            }
        } else if (response.status === 404) {
            apiresult.innerText = `Moneda no encontrada`;
        } else {
            apiresult.innerText = `Error en la respuesta de la llamada API. Error num. ${response.status}`;
        }
        


        // if (negative(uno, dos) === true) {
        //     fetch(`https://v6.exchangerate-api.com/v6/99e6ff88606075edbf61c0ef/latest/${one}`)
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data);
        //             apiresult.innerText = `${response}`;
        //             const rate = data.conversion_rates[two];
        //             const calculationResult = data.conversion_rates[two] * amountEl_one.value;
        //             console.log(rate);
        //             rateEl.innerText = `1 ${one} = ${rate} ${two}`;
        //             amountEl_two.value = `${calculationResult}`;
        //         })
        // } else if (negative(uno, dos) === uno) {
        //     errorOne.innerText = `Valor 1 no puede ser negativo`;
        // } else if (negative(uno, dos) === dos) {
        //     errorTwo.innerText = 'Valor 2 no puede ser negativo';
        // }
    } catch (error) {
        apiresult.innerText(error);
    }
    
}

// Fetch para calcular e impactar en el DOM > VIDEO
// function calculate() {
//     const one = currencyEl_one.value;
//     const two = currencyEl_two.value;
//     const uno = amountEl_one.value;
//     const dos = amountEl_two.value;
//     if (negative(uno, dos) === true) {
//         fetch(`https://v6.exchangerate-api.com/v6/99e6ff88606075edbf61c0ef/latest/${one}`)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 apiresult.innerText = `${data.result}`;
//                 const rate = data.conversion_rates[two];
//                 const calculationResult = data.conversion_rates[two] * amountEl_one.value;
//                 console.log(rate);
//                 rateEl.innerText = `1 ${one} = ${rate} ${two}`;
//                 amountEl_two.value = `${calculationResult}`;
//             })
//     } else if (negative(uno, dos) === uno) {
//         errorOne.innerText = `Valor 1 no puede ser negativo`;
//     } else if (negative(uno, dos) === dos) {
//         errorTwo.innerText = 'Valor 2 no puede ser negativo';
//     }
// }

// Para cualquier cambio en el DOM necesitamos estar escuchando.
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('change', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('change', calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
})

// No permetre nombres negatius
function negative (uno, dos) {
    if (uno < 0) {
        return uno;
    } else if (dos < 0) {
        return dos;
    } else {
        return true;
    }
}
calculate();