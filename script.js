const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Faremos um quiz para testar seus conhecimentos sobre a loirinha mais famosa da atualidade. Álbum dela que marcou sua transição de country para pop, lançando seu sucesso mundial e apresentando hits como 'Shake It Off' e 'Blank Space' ",
        alternativas: [
            {
                texto: "Red",
                afirmacao: "Sinto muito."
            },
            {
                texto: "1989",
                afirmacao: "Parabéns!"
            }
        ]
    },
    {
        enunciado: "Álbum que contém os singles de sucesso 'Love Story' e 'You Belong With Me' ",
        alternativas: [
            {
                texto: "Fearless",
                afirmacao: "Você conhece"
            },
            {
                texto: "Reputation",
                afirmacao: " Infelizmente "
            }
        ]
    },
    {
        enunciado: "Nome da turnê de 2015 que promoveu o álbum '1989'",
        alternativas: [
            {
                texto: "Red Tour",
                afirmacao: "você não conhece"
            },
            {
                texto: "1989 World Tour",
                afirmacao: "a loirinha muito bem "
            }
        ]
    },
    {
        enunciado: "Música de Reputation que conta com a participação de Ed Sheeran e Future",
        alternativas: [
            {
                texto: "Endgame",
                afirmacao: "já pode receber"
            },
            {
                texto: "...Ready For It?",
                afirmacao: " a loirinha tanto assim, "
            }
        ]
    },
    {
        enunciado: "Qual foi o primeiro álbum que foi regravado? ",
        alternativas: [
            {
                texto: "1989",
                afirmacao: "mas escute mais suas músicas e siga ela para tentar esse quiz novamente e acertar todas!!"
            },
            {
                texto: "Fearless",
                afirmacao: " seu certificado de swiftie!!! "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seus resultados foram...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();