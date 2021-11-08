let qtdCartas = prompt('Digite um número par entre 4 e 14')
let board = document.querySelector('.board')
let count = 0

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
                    <div class="front-face face" data-identifier="front-face" onclick="flipCard(this)">
                    </div>
                    <div class="back-face face" data-identifier="back-face" onclick="flipCard(this)">${verso[i]}
                    </div>
                </div>
            `
        }
        
        cronometro()
    } else{
        promptQtd()
    }
}

function comparador() { 
	return Math.random() - 0.5;
}

let primeiroClick = null
let segundoClick = null
let tokenVerificado
function flipCard(face){
    let card = face.parentNode
    tokenVerificado = true
    for(let i=0; i<verificados.length;i++){
        if(verificados[i]===card){
            tokenVerificado=false
            removeClass()
            // matchCard()
        }        
    }
    
    if(tokenVerificado){
        if(primeiroClick===null){
                primeiroClick = card
                count++
            }
            else{
                segundoClick = card
                count++
            }
            
            primeiroClick.classList.add('selecionado')
            segundoClick.classList.add('selecionado')
            matchCard(card)
    }
}

let verificados = []
let listaCards
function matchCard(card){
    listaCards = document.querySelectorAll('.card')
    
    for(let i=0; i<listaCards.length;i++){
        const elementoTeste = listaCards[i]
        
        if((listaCards[i].classList.contains('selecionado')) && 
        (elementoTeste.innerHTML===card.innerHTML) &&
        (card!==elementoTeste)){
            verificados.push(card)
            verificados.push(elementoTeste)
            anularCards()
            endGame()
        } 
        
        else{
            setTimeout(removeClass, 1000)
        }
    }
}

function removeClass(){
    primeiroClick.classList.remove('selecionado')
    segundoClick.classList.remove('selecionado')
    anularCards()
}

function endGame(){
    if(verificados.length===listaCards.length){
        setTimeout(win, 300)
    }
}

function win(){
    clearInterval(relogio)
    alert(`Você ganhou em ${count} jogadas em ${segundos} segundos`)
    const resposta = prompt('Gostaria de jogar novamente? s/n')
    if((resposta==='sim')||(resposta==='s')){
        location.reload()
    }
}

let relogio
let segundos=0

function timer(){
    segundos++
    let timer = document.querySelector('.timer')
    timer.innerHTML = segundos + ' s'
}

function cronometro(){
    relogio = setInterval(timer, 1000)
}


function anularCards(){
    primeiroClick = null
    segundoClick = null
}

addCards()