'use strict'

var botoesDoar = document.querySelectorAll(".card"); // Seleciona todos os botões com a classe ".buttom-doar"

botoesDoar.forEach(function (botao) { // Itera sobre cada botão selecionado
  botao.addEventListener("click", function () { // Adiciona um evento de clique a cada botão
    var checkbox = document.getElementById("checkbox"); // Obtém o elemento do checkbox com o ID "checkbox"
    var errorMessage = document.getElementById("erro-messagem"); // Obtém o elemento da mensagem de erro com o ID "erro-messagem"

    if (!checkbox.checked) { // Verifica se o checkbox não está marcado
      errorMessage.innerText = "Você precisa concordar com a política de privacidade."; // Define o texto da mensagem de erro
      errorMessage.scrollIntoView({ behavior: 'smooth' }); // Move a tela até a mensagem de erro
    } else {
      errorMessage.innerText = ""; // Remove o texto da mensagem de erro
      window.open("../../formularios/form_criar_conta/index.html", "_blank");
    }
  });
});