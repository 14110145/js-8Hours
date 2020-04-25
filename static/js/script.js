function ageInDays(){
    let birthYear = prompt("Enter your year birthday!");
    let birthDayss = (2020- birthYear)*365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + birthDayss + ' days !');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('age-result').appendChild(h1);
    // console.log(birthDays);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

function generator(){
    let idElement = document.getElementById('box-generator-cat');
    let image = document.createElement('img');
    image.src = 'https://loremflickr.com/320/240';
    idElement.appendChild(image);
}
