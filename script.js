const form = document.getElementById('myForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword =document.getElementById('confpassword')
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmpassworderror')

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    usernameError.textContent = '';
    emailError.textContent = '';
    confirmPasswordError.textContent = '';
    email.classList.remove('invalid');
    password.classList.remove('invalid');
    confirmPassword.classList.remove('invalid');

    if (username.value.trim() === '') {
        usernameError.textContent = 'Username is required.';
        username.classList.add('invalid');
        let isValid = false;
    }

    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        email.classList.add('invalid');
        let isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        emailError.textContent = 'email is not valid.';
        email.classList.add('invalid');
        let isValid = false;
    }

    if (password.value.trim() === '') {
        passwordError.textContent = 'Password is required.';
        password.classList.add('invalid');
        let isValid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        password.classList.add('invalid');
        let isValid = false;
    }

    if (confirmPassword.value.trim() === '') {
        confirmPasswordError.textContent = 'Password is required.';
        password.classList.add('invalid');
        let isValid = false;
    }else if (password !== confirmPassword){
        confirmPasswordError.textContent = 'Password must match.';
        confirmPassword.classList.add('invalid');
        let isValid = false;
    }
    
    if(password !== confirmPassword) {
        alert('fill all fields.');  
    }else if(isValid){
        alert('Form is valid');
    }
});

function isValidEmail(email) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
}