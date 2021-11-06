let qtdCartas = prompt('Digite um número par entre 4 e 14')
let board = document.querySelector('.board')

let imagens =[
    'img/bobrossparrot.gif',
    'img/explodyparrot.gif',
    'img/fiestaparrot.gif',
    'img/metalparrot.gif',
    'img/revertitparrot.gif',
    'img/tripletsparrot.gif',
    'img/unicornparrot.gif'
]
imagens.sort(comparador)

function promptQtd(){
    qtdCartas = prompt('Digite um número par entre 4 e 14')
    addCards()
}
function addCards(){
    if((qtdCartas>=4)&&(qtdCartas<=14)&&(qtdCartas%2==0)){
        let verso = []
        for(let i=0; i<(qtdCartas/2); i++){
            verso.push(`<img src="${imagens[i]}" alt="">`,
                `<img src="${imagens[i]}" alt="">`)
        }
        verso.sort(comparador)
        for(let i=0; i<qtdCartas; i++){    
            board.innerHTML += `
                <div class="card">
                    <div class="front-face face" onclick="flipCard(this)">
                    </div>
                    <div class="back-face face" onclick="flipCard(this)">${verso[i]}
                    </div>
                </div>
            `
        }
    } else{
        promptQtd()
    }
}

function comparador() { 
	return Math.random() - 0.5;
}

let primeiroClick = null
let segundoClick = null
let tokenVerificado = true
function flipCard(face){
    let card = face.parentNode

    for(let i=0; i<verificados.length;i++){
        if(verificados[i]===card){
            tokenVerificado=false
            primeiroClick=null
            segundoClick=null
            matchCard()
        }        
    }
    
    if(tokenVerificado){
        if(primeiroClick===null){
                primeiroClick = card
            }
            else{
                segundoClick = card
            }
            primeiroClick.classList.add('selecionado')
            segundoClick.classList.add('selecionado')
            matchCard(card)
    }

}

let verificados = []

function matchCard(card){
    let listaCards = document.querySelectorAll('.card')
    
    for(let i=0; i<listaCards.length;i++){
        const teste = listaCards[i].classList.contains('selecionado')
        const elementoTeste = listaCards[i]
        
        if((teste)&&(elementoTeste.innerHTML===card.innerHTML)&&(card!==elementoTeste)){            
            verificados.push(card)
            verificados.push(elementoTeste)
                        
            primeiroClick = null
            segundoClick = null

        } else{
            setTimeout(removerClasse, 1500)            
        }
    }
}

function removerClasse(){
    primeiroClick.classList.remove('selecionado')
    segundoClick.classList.remove('selecionado')
    primeiroClick = null
    segundoClick = null
}

addCards()