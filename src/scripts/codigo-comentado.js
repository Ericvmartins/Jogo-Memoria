// Array que contém emojis duplicados para o jogo de memória
const emojis = [
    "🐱", // Emoji de gato
    "🐱", // Emoji de gato
    "🦝", // Emoji de guaxinim
    "🦝", // Emoji de guaxinim
    "🦊", // Emoji de raposa
    "🦊", // Emoji de raposa
    "🐶", // Emoji de cachorro
    "🐶", // Emoji de cachorro
    "🐵", // Emoji de macaco
    "🐵", // Emoji de macaco
    "🦁", // Emoji de leão
    "🦁", // Emoji de leão
    "🐯", // Emoji de tigre
    "🐯", // Emoji de tigre
    "🐮", // Emoji de vaca
    "🐮", // Emoji de vaca
];

// Array para armazenar as cartas que o jogador abriu
let openCards = [];

// Embaralha os emojis aleatoriamente usando a função sort
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// Loop para criar elementos de caixa para cada emoji embaralhado
for (let i = 0; i < emojis.length; i++) {
    // Cria um novo elemento div
    let box = document.createElement("div");
    
    // Adiciona a classe "item" à div
    box.className = "item";
    
    // Define o conteúdo HTML da div como o emoji embaralhado
    box.innerHTML = shuffleEmojis[i];
    
    // Define a função de clique para a caixa
    box.onclick = handleClick;
    
    // Adiciona a nova caixa ao elemento com a classe "game" no DOM
    document.querySelector(".game").appendChild(box);
}

// Função que é chamada quando uma caixa é clicada
function handleClick() {
    // Verifica se menos de 2 cartas estão abertas
    if (openCards.length < 2) {
        // Adiciona a classe "boxOpen" para mostrar que a caixa foi aberta
        this.classList.add("boxOpen");
        
        // Adiciona a caixa atual ao array de cartas abertas
        openCards.push(this);
    }

    // Verifica se duas cartas estão abertas
    if (openCards.length == 2) {
        // Chama a função checkMatch após 500 milissegundos
        setTimeout(checkMatch, 500);
    }

    // Log das cartas abertas no console para depuração
    console.log(openCards);
}

// Função para verificar se as duas cartas abertas são iguais
function checkMatch() {
    // Verifica se o conteúdo das duas cartas abertas é igual
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        // Se forem iguais, adiciona a classe "boxMatch" para indicar que elas combinam
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        // Se não forem iguais, remove a classe "boxOpen" para fechar as cartas
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    // Limpa o array de cartas abertas
    openCards = [];

    // Verifica se todas as cartas combinadas foram encontradas
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        // Se todas as cartas foram combinadas, exibe um alerta de vitória
        alert("Você venceu !");
    }
}


/*
Explicação do Código:

1. Array de Emojis: O código começa definindo um array `emojis` que contém emojis duplicados. Esses emojis serão usados como cartas no jogo de memória.

2. Array de Cartas Abertas: A variável `openCards` é inicializada como um array vazio. Ela será usada para armazenar as cartas que o jogador abriu durante o jogo.

3. Embaralhamento dos Emojis: A variável `shuffleEmojis` é criada ao embaralhar o array `emojis` usando a função `sort`. Isso garante que a ordem dos emojis seja aleatória a cada vez que o jogo é iniciado.

4. Criação das Caixas: Um loop `for` percorre o array `shuffleEmojis` e cria um elemento `div` para cada emoji. Cada `div` recebe a classe "item" e o emoji correspondente como conteúdo. A função `handleClick` é atribuída ao evento `onclick` de cada caixa, e as caixas são adicionadas ao elemento com a classe "game" no DOM.
*/