var altura = 0
var largura = 0

// Busca o valor da altura e largura da página sempre que a mesma é movida ou redimencionada
function ajustarTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustarTamanhoPalcoJogo()

// Cria a posicao randomica do mosquito.
function posicaoRandomica() {
    // Criar um valor que pode ir de zero até o valor máximo de altura ou largura.
    var posicaoX = Math.floor(Math.random() * largura) - 90    
    var posicaoY = Math.floor(Math.random() * altura) - 90

    // Verifica se o valor não é negativo, caso seja, mantem o valor igual a zero a fim de manter a mosca
    // dentro da página.
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    // Criar o elemento html
    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'

    // Trata da seleção do tamanho do mosquito com a função tamanhoAleatorio()
    var tamanho = tamanhoAleatorio()
    mosca.className = tamanho

    // Trata da seleção do lado em que o mosquito vai estar virado com a função ladoAleatorio()
    var lado = ladoAleatorio()
    mosca.className += ' ' + lado

    // Adicionar o elemento html ao body
    document.body.appendChild(mosca)
}

// Define um tamanho aleatório para o mosquito
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

// Define um lado aleatório para o mosquito
function ladoAleatorio() {
    var lado = Math.floor(Math.random() * 2)
    switch(lado) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

posicaoRandomica()