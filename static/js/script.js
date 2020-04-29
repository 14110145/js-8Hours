//Challenge: 1
function ageInDays(){
    let birthYear = prompt("Enter your year birthday!");
    let birthDayss = (2020- birthYear)*365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + birthDayss + ' days !');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('age-result').appendChild(h1);
    // console.log(birthDays);
};
function reset(){
    document.getElementById('ageInDays').remove();
};

//Challenge: 2
function generator(){
    let idElement = document.getElementById('box-generator-cat');
    let image = document.createElement('img');
    image.src = 'https://loremflickr.com/320/240';
    idElement.appendChild(image);
};

//Challenge: 3
function rpsGame(yourChoice){
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(ranDomInt());
    result = decideWinner(humanChoice, botChoice);
    message = finalMessage(result)
    rpsFrontEnd(humanChoice, botChoice, message);
    // console.log(result);
    // console.log(message);
};
function ranDomInt(){
    return Math.floor(Math.random()*3);
};
function numberToChoice(number){
    return['rock','paper','sicssor'][number];
};
function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock':{'sicssor': 1, 'rock': 0.5, 'paper': 0},
        'paper':{'sicssor': 0, 'rock': 1, 'paper': 0.5},
        'sicssor':{'sicssor': 0.5, 'rock': 0, 'paper': 1}
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore , computerScore];
};

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message': 'You lost!', 'color': 'red'}
    }else if(yourScore === 0.5){
        return {'message': 'You tied!', 'color': 'yellow'}
    }else{
        return {'message': 'You won!', 'color': 'green'}
    };
};

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    // console.log(humanImageChoice);
    // console.log(document.getElementById('rock').src);
    let imagesDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'sicssor': document.getElementById('sicssor').src
    };
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('sicssor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    messageDiv.setAttribute('style', 'display: flex; align-items: center;');

    humanDiv.innerHTML = "<img src='" + imagesDataBase[humanImageChoice] + "'style = 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'> ";
    botDiv.innerHTML = "<img src='" + imagesDataBase[botImageChoice] + "'style = 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'> ";
    messageDiv.innerHTML = "<h2 style ='color:" + finalMessage['color'] + "'>" + finalMessage['message'] + "</h1>"
    document.getElementById('flex-box-challenge-3').appendChild(humanDiv);
    document.getElementById('flex-box-challenge-3').appendChild(messageDiv);
    document.getElementById('flex-box-challenge-3').appendChild(botDiv);

};

//Challenge: 4
let all_buttons = document.getElementsByTagName('button');
let copyAllButtons = [], randomCL = [];
for(let i=0 ; i<all_buttons.length ; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
};

function buttonColorChange(buttonThingy){
//  console.log(buttonThingy);
    if(buttonThingy.value === 'red'){
        buttonsRed();
    }else if(buttonThingy.value === 'green'){
        buttonsGreen();
    }else if(buttonThingy.value === 'random'){
        buttonsRandom();
    }else {
        buttonsReset();
    }
};

function buttonsRed(){
    for(let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.value = 'btn btn-danger';
    }
};
function buttonsGreen(){
    for(let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.value = 'btn btn-success';
    }
};

function buttonsReset(){
    for(let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.value = 'btn ' + copyAllButtons[i] ;
    }
};

function randomColor(){
    for(let i=0; i < all_buttons.length; i++){
        let randomNum = Math.random()*3;
        if(randomNum > 0 && randomNum <= 1){
            randomCL[i] = 'btn-danger';
        };
        if(randomNum > 1 && randomNum <= 2){
            randomCL[i] = 'btn-warning';
        };
        if(randomNum > 2){
            randomCL[i] = 'btn-primary';
        };
    };
    return randomCL;
};

function buttonsRandom(){
    randomColor();
    for(let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.value = 'btn ' + randomCL[i] ;
    }
};

//Challenge: 5
let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-count', 'div': '#flex-box-challenge-5-left', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-count', 'div': '#flex-box-challenge-5-right', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
    'J': 10, 'Q': 10, 'K': 10, 'A': [1, 11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('static/sounds/swish.m4a')
const winSound = new Audio('static/sounds/cash.mp3')
const lossSound = new Audio('static/sounds/aww.mp3')

document.querySelector('#blackjack-hit').addEventListener('click',blackJackHit);
document.querySelector('#blackjack-stand').addEventListener('click',dealerLogic);
document.querySelector('#blackjack-deal').addEventListener('click',blackjackDeal);

function blackJackHit(){
    if(blackjackGame['isStand'] === false){
        let card = randomCard();
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
        console.log(YOU['score']);
    }
};
function showCard(card, activePlayer){
    if(activePlayer['score'] <= 21){
        let cardImg = document.createElement('img');
        cardImg.src = `static/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImg);
        hitSound.play();
    }
    else{

    }
};

function blackjackDeal(){
    if(blackjackGame['turnsOver'] === true){

        blackjackGame['isStand'] = false;
        let yourImgs = document.querySelector(YOU['div']).querySelectorAll('img');
        let dealerImgs = document.querySelector(DEALER['div']).querySelectorAll('img');

        for(let i=0; i < yourImgs.length; i++){
            yourImgs[i].remove();
        };
        for(let i=0; i < dealerImgs.length; i++){
            dealerImgs[i].remove();
        }
        YOU['score'] = 0;
        DEALER['score'] = 0;
        document.querySelector(YOU['scoreSpan']).textContent = 0;
        document.querySelector(YOU['scoreSpan']).style.color = 'white';
        document.querySelector(DEALER['scoreSpan']).textContent = 0;
        document.querySelector(DEALER['scoreSpan']).style.color = 'white';
        document.querySelector('#blackjack-span').textContent = "Let's play!";
        document.querySelector('#blackjack-span').style.color = 'black';

        blackjackGame['turnsOver'] = true;
    }
};

function randomCard(){
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
};

function updateScore(card, activePlayer){
    if(card === 'A'){
        if(activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21){
            activePlayer['score'] += parseInt(blackjackGame['cardsMap'][card][1]);
        }
        else{
            activePlayer['score'] += parseInt(blackjackGame['cardsMap'][card][0]);
        }
    }else{
        activePlayer['score'] += parseInt(blackjackGame['cardsMap'][card]);
    }
};

function showScore(activePlayer){
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
};

function sleep(ms) {  
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function dealerLogic(){
    blackjackGame['isStand'] = true;

    while(DEALER['score'] < 16 && blackjackGame['isStand'] === true){
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(800);
    };

    blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);
};
    

function computeWinner() {  
    let winner;
    if(YOU['score'] <= 21){
        if(YOU['score'] > DEALER['score'] || DEALER['score'] > 21){
            blackjackGame['wins']++;
            winner = YOU;
        }else if(YOU['score'] < DEALER['score']) {
            blackjackGame['losses']++;
            winner = DEALER;
        }else if(YOU['score'] === DEALER['score']){
            blackjackGame['draws']++;
        }
    }else if( YOU['score'] > 21 && DEALER['score'] <=21){
        blackjackGame['losses']++;
        winner = DEALER;
    }else if( YOU['score'] > 21 && DEALER['score'] > 21){
        blackjackGame['draws']++;
    }
    return winner;
}

function showResult(winner){
    let message, messageColor;
    if(blackjackGame['turnsOver'] === true){
        if(winner === YOU){
            document.querySelector('#Wins').textContent = blackjackGame['wins'];
            message = 'You won!';
            messageColor = 'green';
            winSound.play();
        }else if(winner === DEALER){
            document.querySelector('#Losses').textContent = blackjackGame['losses'];
            message = 'You loss!';
            messageColor = 'red';
            lossSound.play();
        }else{
            document.querySelector('#Draws').textContent = blackjackGame['draws'];
            message = 'You drew!';
            messageColor = 'black';
        }
    
        document.querySelector('#blackjack-span').textContent = message;
        document.querySelector('#blackjack-span').style.color = messageColor;
    };
}