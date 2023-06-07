'use strict'

import { criarContaFuncionario } from "./end_point_criar-conta.js"
import { admDelete} from "./end_point_excluir-conta.js"
const usernameCriar = document.getElementById("username-criar");
const emailCriar = document.getElementById("email-criar");
const passwordCriar = document.getElementById("password-criar");
const fotoCriar = document.getElementById("cria-url-foto")
const buttonCriar = document.getElementById("button-criar")

// Criar Funcionario
const criarFuncionario = async (data) => {

  const status = await criarContaFuncionario(data)
  if(status){
    let mensagemSucesso = document.createElement('p');
    mensagemSucesso.textContent = "Cadastro realizado com secesso.";
    mensagemSucesso.classList.add('sucesso');
    document.body.appendChild(mensagemSucesso);
    setTimeout(() => {
      mensagemSucesso.remove();
    }, 4000); // Remover a mensagem após 3 segundos (3000 milissegundos)
  }

}

buttonCriar.addEventListener('click', function () {

  if (usernameCriar.value =='' || emailCriar.value == '' || passwordCriar.value == '' || fotoCriar.value == '') {
    let mensagemErro = document.createElement('p');
    mensagemErro.textContent = `Atenção verifique as informações e tente novamente. Nome, Email, Senha e Foto são obrigatórios`;
    mensagemErro.classList.add('erro');
    document.body.appendChild(mensagemErro);
    setTimeout(() => {
      mensagemErro.remove()
    }, 5000)
  }else{
    
    let dataJson = {
    name: usernameCriar.value,
    email: emailCriar.value,
    password: passwordCriar.value,
    photo_url: fotoCriar.value,
    id_administrator: 1
    }

    console.log(dataJson)
    criarFuncionario(dataJson)
  }

})

// Deletar Funcionario

const emailExcluir = document.getElementById('email-excluir');
let admDeletar = '';

const demitirFuncionario = async (email) => {
  let statusConta = await admDelete(email.toLowerCase());

  if(statusConta.status == 201){
    let mensagemSucesso = document.createElement('p');
    mensagemSucesso.textContent = "Cadastro deletado com secesso.";
    mensagemSucesso.classList.add('sucesso');
    document.body.appendChild(mensagemSucesso);
    setTimeout(() => {
      mensagemSucesso.remove();
    }, 4000); // Remover a mensagem após 3 segundos (3000 milissegundos)
  }else{
    let mensagemErro = document.createElement('p');
    mensagemErro.textContent = 'Atenção usuario não localizado, verifique o email e tente novamente';
    mensagemErro.classList.add('erro');
    document.body.appendChild(mensagemErro);
    setTimeout(() => {
      mensagemErro.remove()
    }, 5000)
  }
}

emailExcluir.addEventListener('input', function () {
  admDeletar = emailExcluir.value;
});

const buttonExcluir = document.getElementById("button-excluir")

buttonExcluir.addEventListener('click', function () {
  const verificarEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.includes("@gmail.com");
  };

  const emailValido = verificarEmail(admDeletar);

  if (emailValido) {
    demitirFuncionario(admDeletar);
  }else{
    let mensagemErro = document.createElement('p');
    mensagemErro.textContent = `Atenção verifique as informações e tente novamente.`;
    mensagemErro.classList.add('erro');
    document.body.appendChild(mensagemErro);
    setTimeout(() => {
      mensagemErro.remove()
    }, 5000)
  }
});
