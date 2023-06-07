'use strict'

import { getDoacao } from './end_point_get_doacoes.js'

const criaListaDoacao = (data) => {
    const doador = document.createElement('div');
    doador.classList.add('doador');
  
    const informacoes = document.createElement('div');
    informacoes.classList.add('informacoes');
  
    const nome = document.createElement('p');
    nome.textContent = data.nome;
  
    const email = document.createElement('p');
    email.textContent = data.email;
  
    const valor = document.createElement('p');
    valor.textContent = `R$: ${data.valor.toFixed(2)}`;
  
    const linha = document.createElement('div');
    linha.classList.add('linha');
  
    doador.append(informacoes, linha);
    informacoes.append(nome, email, valor);
  
    return doador;
  };
  
  const loadDoacoes = async () => {
    const cards = await getDoacao();
    const doador = document.querySelector('.box-main-doador');
  
    const listDoador = cards.map(criaListaDoacao);
    doador.replaceChildren(...listDoador);
  };
  
  loadDoacoes();