'use strict'

// Obter o elemento select de login
const selectLogin = document.getElementById('login');

// Adicionar um ouvinte de evento para quando o valor selecionado no select for alterado
selectLogin.addEventListener('change', function () {
    // Obter a opção selecionada
    const selectedOption = this.options[this.selectedIndex];

    // Obter a URL associada à opção selecionada
    const url = selectedOption.value;

    // Verificar se há uma URL definida
    if (url) {
        // Abrir a URL em uma nova janela ou guia
        window.open(url, '_blank');
    }
});


// Função para mostrar ou ocultar divs com base em uma opção fornecida
function mostrarDiv(opcao) {
    // Obter todas as divs com a classe "div-menu"
    var divsMenu = document.getElementsByClassName("div-menu");

    if (opcao === "inicial") {
        // Se a opção for "inicial", percorrer todas as divs
        for (var i = 0; i < divsMenu.length; i++) {
            var div = divsMenu[i];

            // Ocultar a div
            div.style.display = "none";

            // Verificar se a div é a div inicial e possui a classe "div-menu"
            if (div.id === "div-inicial" && div.classList.contains("div-menu")) {
                // Remover a classe "div-menu" da div inicial
                div.classList.remove("div-menu");
            }
        }
    } else {
        // Caso contrário, se a opção não for "inicial"
        var div3 = document.getElementById("div3");

        // Ocultar a div3
        div3.style.display = "none";

        // Percorrer todas as divs
        for (var i = 0; i < divsMenu.length; i++) {
            var div = divsMenu[i];

            // Verificar se a div corresponde à opção fornecida
            if (div.id === "div" + opcao) {
                // Se corresponder, exibir a div
                div.style.display = "block";
            } else {
                // Caso contrário, ocultar a div
                div.style.display = "none";
            }
        }
    }
}

// Chamar a função para tornar a div3 inicialmente visível
mostrarDiv("3");


