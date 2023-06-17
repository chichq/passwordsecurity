// Listas de elementos para a senha
let numberItens = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let lettersU = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'N', 'M', '0', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let lettersL = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let symbolsItens = ['#', '!', '$', '%', '&', '*', '+', '/', '-', '@', '=', '?', ',', '.', ';', ':'];

// Listas de elementos disponíveis para a senha/ Lista da senha
elementosSenha = [];
senha = [];

function gerarSenha() {
    // Capturando as caixas de check
    let number = document.querySelector("#numberCheck");
    let upper = document.querySelector("#upperCheck");
    let lower = document.querySelector("#lowerCheck");
    let symbol = document.querySelector("#symbolCheck");
    // Capturando a caixa de quantidade de caracteres
    let carac = document.querySelector("#caracs").value;
    // Capturando a tag de resposta
    let resposta = document.querySelector("#resposta");
    // Limpando o tag de resposta
    resposta.innerHTML = "";

    if (carac < 5 || carac > 30) {
        alert("[ERRO] A senha só pode ter entre 5 a 30 caracteres");
    } else {
        /* Verificando se os elementos estão checados, caso esteja o 
        elemento e colocado na lista de elementos disponíveis para a senha */
        if (number.checked) {
            elementosSenha.push(numberItens);
        }
        
        if (upper.checked) {
            elementosSenha.push(lettersU);
        }
        
        if (lower.checked) {
            elementosSenha.push(lettersL);
        }
        
        if (symbol.checked) {
            elementosSenha.push(symbolsItens);
        }

        // Criando a senha
        for (let c = 1; c <= carac; c++) {
            // Sorteando o elemento que será usado na senha neste atual looping
            elSenha = Math.floor(Math.random() * elementosSenha.length);
        
            if (elementosSenha[elSenha] == numberItens) {
                num = Math.floor(Math.random() * numberItens.length);
                senha.push(numberItens[num]);
            } else if (elementosSenha[elSenha] == lettersU) {
                let leU = Math.floor(Math.random() * lettersU.length);
                senha.push(lettersU[leU]);
            } else if (elementosSenha[elSenha] == lettersL) {
                let leL = Math.floor(Math.random() * lettersL.length);
                senha.push(lettersL[leL]);
            } else if (elementosSenha[elSenha] == symbolsItens) {
                let sym = Math.floor(Math.random() * symbolsItens.length);
                senha.push(symbolsItens[sym]);
            }
        }
        // Mostrando a senha na tela
        for (s in senha) {
            resposta.innerHTML += senha[s];
        }
        // Limpando as listas para uma eventual próxima senha
        elementosSenha = [];
        senha = [];
    }
}

// Criando o evento do botão 
let botao = document.querySelector("#generate");
botao.addEventListener("click", gerarSenha);


// Função para criar um QRcode
function gerarQrcode() {
    let inputUsuario = document.querySelector("#textoSenha").value;
    if (inputUsuario == "") {
        alert("[ERRO] Não podemos criar o seu QRCode porque você não preencheu a caixa de conteúdo")
    } else {
        let googleChartApi = "https://chart.googleapis.com/chart?cht=qr&chs=278x278&chld=H&chl=";
        let conteudoQrcode = googleChartApi + encodeURIComponent(inputUsuario);
        document.querySelector("#qrcodeimg").src = conteudoQrcode;
    }
}

// Criando o evento do botão QR
let botaoQR = document.querySelector("#qrGenerate");
botaoQR.addEventListener("click", gerarQrcode);