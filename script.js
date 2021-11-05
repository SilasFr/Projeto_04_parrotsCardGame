let qtdCartas = prompt('Com quantas cartas quer jogar?')
let cartas = document.querySelector('.cartas')

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

function perguntarQtd(){
    qtdCartas = prompt('Com quantas cartas quer jogar?')
    addCards()
}
function addCards(){
    if((qtdCartas>=4)&&(qtdCartas<=14)){
        let verso = []
        for(let i=0; i<(qtdCartas/2); i++){
            verso.push(`<img src="${imagens[i]}" alt="">`,
                `<img src="${imagens[i]}" alt="">`)
        }
        verso.sort(comparador)
        for(let i=0; i<qtdCartas; i++){    
            cartas.innerHTML += `
                <div class="card">
                    <div class="front-face face" onclick="flipCard(this)">
                    </div>
                    <div class="back-face face" onclick="flipCard(this)">${verso[i]}
                    </div>
                </div>
            `
        }
    } else{
        perguntarQtd()
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}
addCards()