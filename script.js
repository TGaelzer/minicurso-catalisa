const imagem = document.querySelector('img');
const botao = document.querySelector('#botao');
const nomeDoPersonagem = document.querySelector ('#nome');
const especieDoPersonagem = document.querySelector ('#especie');
const statusVida = document.querySelector ('#status');


pegarPersonagem = () => {  
    return fetch(`https://rickandmortyapi.com/api/character/2`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        statusVida.innerHTML = data.status;
    });
}

botao.onclick = pegarPersonagem;