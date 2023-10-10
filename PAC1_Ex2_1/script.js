const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Error case
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Sucess case
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// // Check email case if it's valid or not
// function isValidEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// EventListener del formulario de registro
// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log ('submit');
//     // user validation
//     if (username.value === '') {
//         showError(username, 'Username is required1');
//     } else {
//         showSuccess(username);
//     }
//     // email validation
//     if (email.value === '') {
//         showError(email, 'email is required1');
//     } else if (!isValidEmail(email.value)) {
//         showError(email, 'email is not valid');
//     } else {
//         showSuccess(email);
//     }
//     // passwords
//     if (password.value === '') {
//         showError(password, 'password is required1');
//     } else {
//         showSuccess(password);
//     }
//     if (password2.value === '') {
//         showError(password2, 'password 2 is required1');
//     } else {
//         showSuccess(password2);
//     }
// });

// Check requiered fields more clear (part2)
function checkRequired (inputArr) {
    console.log(inputArr);
    inputArr.forEach(function(input) {
        console.log(input);
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} Is Required field`);
        } else {
            showSuccess(input);
        }
    });
}

// get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Check email 2.0
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

// Password match 
function checkPasswordsMatch (input1, input2) {
    // console.log(input1.value);
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords are not equal');
    }
}

// Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);

    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
});