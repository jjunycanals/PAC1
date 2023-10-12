const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const age = document.getElementById('age');

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
    // console.log(inputArr);
    inputArr.forEach(function(input) {
        // console.log(input);
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

// Age check function
function checkAge(input) {
    if (input.value >= 0 && input.value < 1000 && input.value !== '') {
        showSuccess(input);
    } else {
        showError(input, 'The age is not correct');
    }
}

// Function to check the password
function checkPasswords(input) {
    const lowerletter = /^.[a-z]+$/;
    const upperletter = /^.[A-Z]+$/;
    const num = /^[0-9]+$/;
    let signYes = "`~!@#$%^&*()_+-={}|[]\:;<>?,./";
    if (input.value.length < 8) {
        showError(input, 'The password must be at least 8 characters');
        console.log(lowerletter.test(input.value.trim()));
        console.log(upperletter.test(input.value.trim()));
    } else if (lowerletter.test(input.value.trim()) === false) {
        showError(input, 'Minimum 1 lower character');
    } else if (upperletter.test(input.value.trim()) === false) {
        showError(input, 'Minimum 1 upper character');
    } else if (num.test(input.value.trim()) === false) {
        showError(input, 'Minimum 1 number in the password');
    } else if (signYes.search(input.value) === -1) {
        showError(input, 'Password needs special character like `~!@#$%^&*()_+-={}|[]\:";<>?,./"');
    } else {
        showSuccess(input);
    }
    // const regexpassword = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g;
    // if (input.value.length < 8) {
    //     showError(input, 'The password must be at least 8 characters');
    // } else if (regexpassword.test(input.value.trim()) !== true) {
    //     showError(input, 'Not valid characters');
    // } else {
    //     console.log(regexpassword.test(input.value.trim()));
    //     showSuccess(input);
    // }
}

// Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);

    checkLength(username, 3, 15);
    // checkLength(password, 6, 25); Comento per fer l'úlitm apartat a través de la funció checkPasswords
    checkEmail(email);
    checkPasswordsMatch(password, password2);
    checkAge(age);
    checkPasswords(password);
});