import { novaSenha } from './end_point_nova_senha_cadastro.js';

const form = document.getElementById("form");
const cpf = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const button = document.getElementById('button');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const cpfValue = cpf.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (cpfValue === "") {
    setErrorFor(cpf, "O CPF é obrigatório.");
  } else {
    setSuccessFor(cpf);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.classList.contains("success");
  });

  if (formIsValid) {
    const newData = {
      cpf: cpfValue,
      email: emailValue,
      new_password: passwordConfirmationValue
    };
    novaSenhaUsuario(newData);
  }
}

async function novaSenhaUsuario(data) {
  try {
    const status = await novaSenha(data);
    if (status.status === 201) {
      window.location.href = "../../formularios/form_entrar_conta/index.html";
    } else {
      const mensagemErro = document.createElement('p');
      mensagemErro.textContent = 'CPF ou email incorretos';
      mensagemErro.classList.add('erro');
      document.body.appendChild(mensagemErro);

      setTimeout(() => {
        mensagemErro.remove();
      }, 3000);
    }
  } catch (error) {
    console.error(error);
  }
}

button.addEventListener('click', checkInputs);

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.classList.add("error");
  formControl.classList.remove("success");
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
