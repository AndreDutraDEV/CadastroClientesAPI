
let buttonSubmitData = document.getElementById('btn_sbmtClient');

let nameInput = document.getElementById('nomeCliData');
let emailInput = document.getElementById('emailCliData');
let foneInput = document.getElementById('foneCliData');

const addLoading = () => {
    // buttonSubmitData.classList.add('activeLoading');
    buttonSubmitData.innerHTML = '<span class="spinLoading"></span>'
    buttonSubmitData.disabled = true;
}

const removeLoading = () => {
    // buttonSubmitData.classList.remove('activeLoading');
    buttonSubmitData.innerHTML = 'Enviar'
    buttonSubmitData.disabled = false;
}

const blockinputs = () => {

    nameInput.disabled = true;
    emailInput.disabled = true;
    foneInput.disabled = true;

}

const ableinputs = () => {

    nameInput.disabled = false;
    emailInput.disabled = false;
    foneInput.disabled = false;

}

const handleSubmit = (event) => {
    event.preventDefault();

    let name = document.getElementById('nomeCliData').value;
    let email = document.getElementById('emailCliData').value;
    let fone = document.getElementById('foneCliData').value;

    const form = document.getElementById('formDataClient');

    blockinputs();
    addLoading();


    fetch('https://api.sheetmonkey.io/form/8HKwLubh4LT3NvAgoinQ72', {


        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Nome: name, Email: email, Telefone: fone })
    }).then(() => {

        let nameInput = document.getElementById('nomeCliData');
        let emailInput = document.getElementById('emailCliData');
        let foneInput = document.getElementById('foneCliData');

        nameInput.value = '';
        emailInput.value = '';
        foneInput.value = '';

        removeLoading();
        ableinputs();
    })
}

document.getElementById('formDataClient').addEventListener('submit', handleSubmit);



const inputFone = document.getElementById('foneCliData');

inputFone.addEventListener('keypress', (e) => {

    let inputLength = inputFone.value.length;

    if (!checkNum(e)) {
        e.preventDefault();
    }

    if (inputLength === 0) {
        inputFone.value += '(';
    } else if (inputLength === 3) {
        inputFone.value += ') '
    } else if (inputLength === 10) {
        inputFone.value += '-'
    }

})

function checkNum(e) {
    const char = String.fromCharCode(e.keyCode);

    const pattern = '[0-9]'

    if (char.match(pattern)) {
        return true;
    }
}
