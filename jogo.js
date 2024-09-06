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

let paisSorteado = paises[Math.floor(Math.random() * paises.length)];
let letrasUtilizadas = [];
let erros = 0;

const palavra = document.getElementById("palavra");
const letrasU = document.getElementById("letrasU");
const letraInput = document.getElementById("letra");
const imagemTentativas = document.getElementById("tentativas");

palavra.textContent = "_ ".repeat(paisSorteado.length);

function atualizarImagemTentativas() {
    imagemTentativas.src = `img/${6 - erros}-tentativas.png`;
}

function reiniciarJogo() {
    erros = 0;
    letrasUtilizadas = [];
    paisSorteado = paises[Math.floor(Math.random() * paises.length)];
    palavra.textContent = "_ ".repeat(paisSorteado.length);
    letrasU.textContent = "Letras Utilizadas: ";
    letraInput.value = "";
    atualizarImagemTentativas();
}

function verificar() {
    const letra = letraInput.value.trim().toUpperCase();

    // verificação para garantir que apenas letras sejam inseridas
    if (!/^[A-Z]$/.test(letra)) { 
        alert("Por favor, insira apenas letras!");
        letraInput.value = ""; 
        return;
    }

    if (letrasUtilizadas.includes(letra)) {
        alert("Você já tentou essa letra!");
        return;
    }

    letrasUtilizadas.push(letra);
    letrasU.textContent = "Letras Utilizadas: " + letrasUtilizadas.join(" ");

    let acertou = false;

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
            alert("Você perdeu! A palavra era " + paisSorteado);
            reiniciarJogo(); 
        }
        atualizarImagemTentativas();
    } else {
        const palavraAtual = palavra.textContent.replace(/\s/g, "");
        if (palavraAtual.toUpperCase() === paisSorteado.toUpperCase()) {
            alert("Parabéns! Você ganhou!");
            reiniciarJogo();
        }
    }

    letraInput.value = ""; // limpa o campo de entrada após verificar
}

atualizarImagemTentativas(); 
