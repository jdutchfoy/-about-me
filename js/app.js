'use strict';

let userName = prompt('What is your name?');
alert(`Take a peek at my profile page ${userName}! The upcoming questions can be answered yes/no or y/n`);

let firstQuestion = prompt('Am I currently a flight attendant?').toLowerCase()
if (firstQuestion === 'no' || firstQuestion === 'n') {
  alert('correct!');
} else if (firstQuestion === 'yes' || firstQuestion === 'y') {
  alert('Not anymore');
}
let secondQuestion = prompt('Was I born a US citizen?').toLowerCase()
if (secondQuestion === 'yes' || secondQuestion === 'y') {
  alert('well done, St. Croix is a US Virgin Island');
} else if (secondQuestion === 'no' || secondQuestion === 'n') {
  alert('Sorry, but that one was tricky');
}
let thirdQuestion = prompt('Is my name a nickname?').toLowerCase()
if (thirdQuestion === 'yes' || thirdQuestion === 'y') {
  alert('Nope, Dutch is on my birth certificate');
} else if (thirdQuestion === 'no' || thirdQuestion === 'n') {
  alert('Youre right, my nickname is Bird');
}
let fourthQuestion = prompt('Did I graduate college?').toLowerCase()
if (fourthQuestion === 'yes' || fourthQuestion === 'y') {
  alert('Try again');
} else if (fourthQuestion === 'no' || fourthQuestion === 'n') {
  alert('Great Job!');
}
let fifthQuestion = prompt('Have I ever completed a passport?').toLowerCase()
if (fifthQuestion === 'yes' || fifthQuestion === 'y') {
  alert('Someone paid attention');
} else if (fifthQuestion === 'no' || fifthQuestion === 'n') {
  alert(`Nice try, but incorrect!`);
}
alert(`Thanks for playing ${userName}!`);

let myNum = 12

for (let i = 0; i < 4; i++) {
  let questionSix = +prompt("Guess what number I'm thinking?");
  if (questionSix > myNum) {
    alert("Nope, too high");

  } else if (questionSix < myNum) {
    alert("not quite, too low");

  } else if (questionSix === myNum) {
    alert("Well done!");
    break
  }
}
  alert(`The number I picked was ${myNum}`);

  alert(`Thats the snapshot of me ${userName}, have a great day`);
