'use strict'

export const verificarFuncionario = async (cadastro) => {
  const url = 'http://Localhost:8080/v1/dream-chock/api/verify-account/rh';

  const mandarCadastro = {
    method: 'POST',
    body: JSON.stringify(cadastro),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const enviarCadastro = await fetch(url, mandarCadastro);
  const respostaJson = await enviarCadastro.json(); // Converter para JSON

  return respostaJson;
};
