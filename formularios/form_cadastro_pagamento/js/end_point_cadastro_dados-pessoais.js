export const salvarDados = async (cadastro) => {
    const url = 'http://Localhost:8080/v1/dream-chock/api/personal-data/user';
  
    const dadosUsuario = {
      method: 'POST',
      body: JSON.stringify(cadastro),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    const enviarCadastro = await fetch(url, dadosUsuario);
    const respostaJson = await enviarCadastro.json(); // Converter para JSON
  
    return respostaJson;
  };
  