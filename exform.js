const form = document.getElementById('ex-form')
const numberA = document.getElementById('number-a');
const numberB = document.getElementById('number-b');
let formEValido = false;

function validaForm(numberA, numberB){
    return numberB > numberA;    
}

form.addEventListener('submit', function(e){  
    e.preventDefault();

    formEValido = validaForm(numberA.value, numberB.value)
    if (formEValido) {
        const mensagemSucesso = `Formulário válido: <b>${numberA.value}</b> é menor que <b>${numberB.value}</b>`;
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numberA.value = '';
        numberB.value = '';
    } else {
        const mensagemErro = `Formulário invalido: <b>${numberA.value}</b> é maior que <b>${numberB.value}</b>`;
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';

        numberA.value = '';
        numberB.value = '';
    }
});
