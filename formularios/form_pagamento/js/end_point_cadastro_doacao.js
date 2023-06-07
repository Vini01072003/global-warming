'use strict'

export const salveDataDonation= async (cadastro) => {
    const url = 'http://Localhost:8080/v1/dream-chock/api/register-donation/user';
  
    const dataDonation = {
      method: 'POST',
      body: JSON.stringify(cadastro),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    const enviarCadastro = await fetch(url, dataDonation);
    const respostaJson = await enviarCadastro.json(); // Converter para JSON
  
    return {
        ...respostaJson
    };
  };