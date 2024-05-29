const form = document.getElementById('form');
const matricule = document.getElementById('matricule');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const status = document.getElementById('status');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(matriculeValue === '') {
        setError(matricule, 'Matricule is required');
    } else {
        setSuccess(matricule);
    }

    if(nomValue === '') {
        setError(nom, 'Nom is required');
    } else {
        setSuccess(nom);
    }

    if(prenomValue === '') {
        setError(prenom, 'Prenom is required');
    } else {
        setSuccess(prenom);
    }

};
