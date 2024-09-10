let container = document.querySelector('.container')
let icons = ['A','S','D','F','G','H','J','K','L','Q','W','E','R','T','Y','U','I','O','A','S','D','F','G','H','J','K','L','Q','W','E','R','T','Y','U','I','O']
makeGrid()

function makeGrid(){
    let html = ''
    for(let i=0;i<36;i++){
        let rand = Math.floor(Math.random()*icons.length)
        html+=`<div class="card">
        <div class="back">${icons[rand]}</div>
        <div class="front"></div>
    </div>`
    icons.splice(rand,1)
    }
    container.innerHTML=html
}