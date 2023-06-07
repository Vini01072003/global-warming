'use strict'

export const salveDataCard = async (cadastro) => {
    const url = 'http://Localhost:8080/v1/dream-chock/api/personal-data-payment/user';
  
    const cadastroCard = {
      method: 'POST',
      body: JSON.stringify(cadastro),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    const enviarCadastro = await fetch(url, cadastroCard);
    const respostaJson = await enviarCadastro.json(); // Converter para JSON
  
    return respostaJson;
  };