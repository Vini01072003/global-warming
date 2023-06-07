"use strict"

function contador() {
    // Obtém a referência para o elemento HTML com o ID "numero"
    var numeroElemento = document.getElementById("numero");
    // Remove os pontos do número atual
    var numeroAtual = parseInt(numeroElemento.textContent.replace(/\./g, ""))

    // Gera um número aleatório entre 6 e 12
    var numeroAleatorio = Math.floor(Math.random() * 7) + 6;

    // Calcula o novo número somando o número atual com o número aleatório
    var novoNumero = numeroAtual + numeroAleatorio

    // Atualiza o conteúdo do elemento com o novo número formatado
    numeroElemento.textContent = formatarNumero(novoNumero)
}

function formatarNumero(numero) {
    // Adiciona os pontos no número para formatá-lo
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}
// Chama a função contador a cada segundo (1000 milissegundos)
setInterval(contador, 1000); 
