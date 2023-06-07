import { verificarFuncionario } from './end_point_entrar-conta.js'

const form = document.getElementById("acessarConta");
const createCount = document.getElementById("criarConta")
// const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
//const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("click", () => {
  event.preventDefault()

  checkInputs();
});

const usuario = async (dadosJson) => {

  const statusDaConta = await verificarFuncionario(dadosJson)
  console.log(statusDaConta)

  if ( statusDaConta.obs == 'Administrador' && statusDaConta.status == 201  ) {
    // localStorage.setItem('email', email.value)
    //const idRegisterUser = statusDaConta.id_register_user
    window.location.href = `../../pages/cadastro/cadastro.html?idname=${statusDaConta.name_user}&photo=${statusDaConta.photo_url}`

  } else if (statusDaConta.status == 201 && statusDaConta.obs == 'Funcionario') {
    // localStorage.setItem('email', email.value)
    //const idRegisterUser = statusDaConta.id_register_user
    window.location.href = `../../pages/funcionario/funcionario.html?name=${statusDaConta.name_user}&photo=${statusDaConta.photo_url}`

  }  else {
    const mensagemErro = document.createElement('p');
    mensagemErro.textContent = 'Senha ou email incorretos';
    mensagemErro.classList.add('erro'); // Adiciona a classe CSS 'erro'
    document.body.appendChild(mensagemErro);

    setTimeout(() => {
      mensagemErro.remove();
    }, 3000); // Remover a mensagem após 3 segundos (3000 milissegundos)

  }
}

function checkInputs() {
  // const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;

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


  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    const emailValue = email.value;
    const passwordValue = password.value;

    const dadosJson = {
      email: emailValue,
      password: passwordValue
    };
    console.log(dadosJson);

    usuario(dadosJson)
    console.log("O formulário está 100% válido!");
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

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

createCount.addEventListener("click", function(){
  window.location.href = "../../formularios/form_criar_conta/index.html" 
})














