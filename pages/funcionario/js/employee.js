'use strict'

const urlParams = new URLSearchParams(window.location.search);
const nameUser = urlParams.get('name')
const photo = urlParams.get('photo')

// Atualiza o elemento da imagem com o valor do parâmetro 'photo'
document.getElementById('user-photo').src = photo;

// Atualiza o elemento do parágrafo com o valor do parâmetro 'name'
document.getElementById('user-name').textContent = nameUser;