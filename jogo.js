const paises = [
    "Brasil", "Canada", "Alemanha", 
    "França", "Italia", "Japao", "China", "India", "Australia", 
    "Russia", "Argentina", "Mexico", "Espanha", "Portugal", 
    "Holanda", "Suiça", "Suecia", "Noruega", "Finlandia", "Turquia", "Grécia", "Países Baixo", "Dinamarca", "Qatar",
    "Estados Unidos", "Reino Unido", "Irlanda", "Belgica", "Austria", 
    "Polonia", "Hungria", "Romenia", "Bulgaria", "Eslovaquia", 
    "Croacia", "Eslovenia", "Islandia", "Lituania", "Letonia", 
    "Estonia", "Republica Tcheca", "Israel", "Africa do Sul", "Egito", 
    "Ira", "Arabia Saudita", "Emirados Arabes Unidos", "Nova Zelandia", "Coreia do Sul"
];


const paisSorteado = paises[Math.floor(Math.random() * paises.length)]; // o length serve para pegar o tamanho da lista

const letrasUtilizadas = [];
let erros = 0;

const palavra = document.getElementById("palavra");
const letrasU = document.getElementById("letrasU");
const letraInput = document.getElementById("letra");
const imagemTentativas = document.getElementById("tentativas");

// para ocultar a palavra com os _
palavra.textContent = "_ ".repeat(paisSorteado.length);

function atualizarImagemTentativas() { // função p/ alterar a imagem de acordo com os erros do usuário (a formatação obedece os nomes das img)
    imagemTentativas.src = `img/${6 - erros}-tentativas.png`; // 
}

function verificar() { // verificando se tem cada letra dada na palavra
    const letra = letraInput.value.trim().toUpperCase(); // o trim tira os espaços em branco e o toUpperCase deixa as letras maiúsculas

    if (letrasUtilizadas.includes(letra)) { // caso o usuário tentar repetir uma letra
        alert("Você já tentou essa letra!");
        return; // para de executar as linhas  abaixo e mostrar um erro
    }

    letrasUtilizadas.push(letra); // o push add a letra no fim da lista letrasUtilizadas
    letrasU.textContent = "Letras Utilizadas: " + letrasUtilizadas.join(" "); // só p exibir as letras com espaços

    let acertou = false; // variável de controle
    
    // percorrendo a palavra p ver se tem a letra dada e a colocando na sua posição (atualiza a variável a cada acerto)
    for (let i = 0; i < paisSorteado.length; i++) { 
        if (paisSorteado[i].toUpperCase() === letra) {
            acertou = true;
            const palavraArray = palavra.textContent.split(" ");
            palavraArray[i] = paisSorteado[i];
            palavra.textContent = palavraArray.join(" ");
        }
    }

    if (!acertou) {
        erros++;
        if (erros === 6) {
            alert("Você perdeu!");
            palavra.textContent = paisSorteado; // exibe a palavra completa
        }
        atualizarImagemTentativas(); // chamamando a função p/ alterar a img
    } else {
        const palavraAtual = palavra.textContent.replace(/\s/g, "");
        if (palavraAtual.toUpperCase() === paisSorteado.toUpperCase()) { // O Replace substitui apenas os caracteres escolhidos
            alert("Parabéns! Você ganhou!");
        }
    }
}


atualizarImagemTentativas(); // chamando a função p/ alterar a img quando iniciar





