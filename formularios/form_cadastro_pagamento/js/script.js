import { salvarDados } from "./end_point_cadastro_dados-pessoais.js";
import { automationData } from "./end_point_verifica_dados_pessoais_cadastrados.js";

const form = document.getElementById("form");
const username = document.getElementById("username");
const rg = document.getElementById("rg");
const cpf = document.getElementById("cpf");
const dd = document.getElementById("dd");
const number = document.getElementById("number");
const button = document.getElementById("button");
let idDataPersonal = '';
let newPage = false

// Pega o valor do id do usuário pela URL: http://Localhost8080//formularios/form_cadastro_pagamento/index.html?id=1
const urlParams = new URLSearchParams(window.location.search);
const idRegisterUser = urlParams.get('id')

const automationPage = async (id) => {
  const idUser = Number(id);
  const dataUser = await automationData(idUser);
  if (dataUser.status == 201) {
    newPage = true
    username.value = dataUser.message.data_personal.nome;
    rg.value = dataUser.message.data_personal.rg;
    cpf.value = dataUser.message.data_personal.cpf;
    dd.value = dataUser.message.data_contacts.ddd;
    number.value = dataUser.message.data_contacts.numero_telefone;
    idDataPersonal = dataUser.message.data_personal.id;

    // Bloqueia as caixas de texto
    username.readOnly = true;
    rg.readOnly = true;
    cpf.readOnly = true;
    dd.readOnly = true;
    number.readOnly = true;

  } else {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      checkInputs();
    });

    const usuario = async (dadosJson) => {
      const statusDaConta = await salvarDados(dadosJson);
      if (statusDaConta.status == 201) {
        return true;
      } else {
        return false;
      }
    };

    const saveUserData = async () => {
      const name = username.value;
      const rgUser = rg.value;
      const cpfUser = cpf.value;
      const id = Number(idRegisterUser);
      const ddd = dd.value;
      const numberPhoneUser = number.value;

      const dadosJson = {
        "data_user": {
          "name_user": name,
          "rg": rgUser,
          "cpf": cpfUser,
          "id_register": id,
          "data_contacts": [
            {
              "ddd": ddd,
              "number_phone": numberPhoneUser
            }
          ]
        }
      };

      const status = await usuario(dadosJson);

      if (status) {
        let mensagemSucesso = document.createElement('p');
        mensagemSucesso.textContent = `Parabéns! Seus dados foram confirmados com sucesso, clique novamente no botão enviar para proseguir.`;
        mensagemSucesso.classList.add('sucesso');
        document.body.appendChild(mensagemSucesso);
        setTimeout(() => {
          mensagemSucesso.remove();
          location.reload()
        }, 4000);
        
      } else {
        const mensagemErro = document.createElement('p');
        mensagemErro.textContent = `Atenção verifique as informações e tente novamente.`;
        mensagemErro.classList.add('erro');
        document.body.appendChild(mensagemErro);
        setTimeout(() => {
          mensagemErro.remove()
        }, 3000)
        return false;
      }
    };

    function checkInputs() {
      const usernameValue = username.value;
      const rgValue = rg.value;
      const passwordValue = cpf.value;
      const ddConfirmation = dd.value;
      const numberConfirmation = number.value;

      if (usernameValue === "") {
        setErrorFor(username, "O nome é obrigatório.");
      } else {
        setSuccessFor(username);
      }

      if (rgValue === "") {
        setErrorFor(rg, "O rg é obrigatório.");
      } else {
        setSuccessFor(rg);
      }

      if (passwordValue === "") {
        setErrorFor(cpf, "O CPF é obrigatório.");
      } else if (passwordValue.length < 11) {
        setErrorFor(cpf, "O CPF precisa ter 11 caracteres.");
      } else {
        setSuccessFor(cpf);
      }

      if (ddConfirmation === "") {
        setErrorFor(dd, "O DD é obrigatório.");
      } else if (ddConfirmation.length < 2) {
        setErrorFor(dd, "O DD precisa ter 2 dígitos.");
      } else {
        setSuccessFor(dd);
      }

      if (numberConfirmation === "") {
        setErrorFor(number, "O Número é obrigatório.");
      } else if (numberConfirmation.length < 9) {
        setErrorFor(number, "O Número precisa ter 9 dígitos.");
      } else {
        setSuccessFor(number);
      }

      const formControls = form.querySelectorAll(".form-control");

      const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
      });

      if (formIsValid) {
        saveUserData();
      }
    }

    function setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector("small");

      // Adiciona a mensagem de erro
      small.innerText = message;

      // Adiciona a classe de erro
      formControl.className = "form-control error";
    }

    function setSuccessFor(input) {
      const formControl = input.parentElement;

      // Adicionar a classe de sucesso
      formControl.className = "form-control success";
    }
  }
}

button.addEventListener('click', function () {
  if (newPage == true) {
    window.open(`../../formularios/form_pagamento/index.html?id=${idDataPersonal}&id_register_user=${idRegisterUser}`, '_blank');
    window.close('index.html');
  }
});

automationPage(idRegisterUser);

