const qtdCartas = prompt('Com quantas cartas quer jogar?')

for(let i=0; i<qtdCartas; i++){
    let cartas = document.querySelector('.cartas')
    cartas.innerHTML += `
        <div class="card"><img src="img/front.png" alt=""></div>
    `
}