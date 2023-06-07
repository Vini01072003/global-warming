'use strict'

function mostrarDiv(opcao) {
    // Oculta todas as divs do menu
    var divs = document.getElementsByClassName("div-menu");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
    }

    // Exibe a div correspondente à opção selecionada
    var divSelecionada = document.getElementById("div" + opcao);
    divSelecionada.style.display = "block";
}