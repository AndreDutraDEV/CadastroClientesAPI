

const handleSubmit = (event) => {
    event.preventDefault();

    const name = document.getElementById('nomeCliData').value;
    const email = document.getElementById('emailCliData').value;
    const fone = document.getElementById('foneCliData').value;

    const form = document.getElementById('formDataClient');

    fetch('https://api.sheetmonkey.io/form/8HKwLubh4LT3NvAgoinQ72', {


        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Nome: name, Email: email, Telefone: fone})
    }).then( () => alert('Eviado com Sucesso'))
}

document.getElementById('formDataClient').addEventListener('submit', handleSubmit);