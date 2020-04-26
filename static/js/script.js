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