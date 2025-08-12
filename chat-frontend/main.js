const login_Form = document.getElementById('login-page-container');
const register_Form = document.getElementById('sign-up-page');
const toSignup = document.getElementById('register');
const toLogin = document.getElementById('login');

function shake(el) {
    el.classList.add('shake');
    setTimeout(() => el.classList.remove('shake'), 300);
}

function showLogin() {
    login_Form.style.display = 'flex';
    register_Form.style.display = 'none';
}

function showSignup() {
    register_Form.style.display = 'flex';
    login_Form.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', showLogin);

toSignup.addEventListener('click', (e) => {
    e.preventDefault();
    showSignup();
});

toLogin.addEventListener('click', (e) => {
    e.preventDefault();
    showLogin();
});

register_Form.addEventListener('submit', (e) => {
    e.preventDefault();


    if (!register_Form.checkValidity()) {
        register_Form.reportValidity();
        document.querySelectorAll('.register-informations input').forEach((input) => {
            if(!input.checkValidity() || !input.value.trim()) {
                input.style.border = '2px solid red';
                shake(input);
            } else {
                input.style.border = 'none';
            }
        });
        return;
    }

    // Password match validity
    const pwd = register_Form.elements['register-password'].value;
    const conf = register_Form.elements['confirm-password'].value;
    if(pwd !== conf) {
        ['register-password', 'confirm-password'].forEach((name) => {
            const field = register_Form.elements[name];
            field.style.border = '2px solid red';
            shake(field);
        });
        return;
    }
    alert('Your account was created successfully!');
});