'use strict'

// export const criarConta = async(cadastro) =>{
//     const url = 'http://Localhost:8080/v1/dream-chock/api/create-account/user'

//     const cadastroUsuario = {
//         method: 'POST',
//         body: JSON.stringify(cadastro),
//         headers: {
//             'Content-Type': 'application/json'
//         }  
//     }
//     const enviarCadastro = await fetch(url, cadastroUsuario)
//     return { ...enviarCadastro}
// }


export const criarConta = async (cadastro) => {
    const url = 'http://localhost:8080/v1/dream-chock/api/create-account/user';
  
    const cadastroUsuario = {
      method: 'POST',
      body: JSON.stringify(cadastro),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    const enviarCadastro = await fetch(url, cadastroUsuario);
    const respostaJson = await enviarCadastro.json(); // Converter para JSON
  
    return respostaJson;
  };
  