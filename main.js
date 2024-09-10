let container = document.querySelector('.container')
let icons = ['A','S','D','F','G','H','J','K','L','Q','W','E','R','T','Y','U','I','O','A','S','D','F','G','H','J','K','L','Q','W','E','R','T','Y','U','I','O']
let cardsOpened = [];

makeGrid();
let allCards = document.querySelectorAll('.card');
allCards.forEach(card=>card.addEventListener('click',openCard));

function openCard(){
    this.removeEventListener('click',openCard)
    this.classList.add('active')
    cardsOpened.push(this);

    if(cardsOpened.length===2){
        checkCards()
    }
}

function removeAll(){
    allCards.forEach(card=>card.removeEventListener('click',openCard))
}

function checkCards(){
    removeAll()
    let back1 = cardsOpened[0].querySelector('.back')
    let back2 = cardsOpened[1].querySelector('.back')
    if(back1.innerHTML===back2.innerHTML){
        cardsOpened.length=0;
        returnAllClicks()
    }else{
        setTimeout(()=>{
            cardsOpened[0].classList.remove('active')
            cardsOpened[1].classList.remove('active')
            cardsOpened=[]
            returnAllClicks()
        },1000)
    }

    function returnAllClicks(){
        let allFlipped = document.querySelectorAll('.card:not(.active)')
        allFlipped.forEach(card=>card.addEventListener('click',openCard))
    }
    
}

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
