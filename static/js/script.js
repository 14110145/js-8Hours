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