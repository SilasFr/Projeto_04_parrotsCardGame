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
function flipCard(face){
    let card = face.parentNode

    if(primeiroClick===null){
        primeiroClick = card
    }
    card.classList.toggle('selecionado')   
    matchCard(card)
}

function matchCard(card){
    let verificados = document.querySelectorAll('.card')
    
    for(let i=0; i<verificados.length;i++){
        const teste = verificados[i].classList.contains('selecionado')
        const elementoTeste = verificados[i]
        console.log(teste)
        if((teste) && (elementoTeste.innerHTML===card.innerHTML) &&(card!==elementoTeste)){            
            console.log('deu merda')
        }
    }
}

addCards()