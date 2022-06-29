//GLOBAL VARIABLE DECLARATIONS
var moves = ['rock', 'paper', 'scissors']
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors')
var compScore = 0;
var playerScore = 0;
//ROCK PAPER SCISSORS FUNCTION
function rockPaperScissors() {
    //COMPUTER RANDOM MOVE GENERATOR
    var compMove = moves[Math.floor(Math.random() * moves.length)]
    //PLAYER MOVE SELECTION
    if (rock.selected) playerMove = 'rock';
    if (paper.selected) playerMove = 'paper';
    if (scissors.selected) playerMove = 'scissors';
    //WIN/LOSS DEFINITIONS
    if (compMove === playerMove) {
        result = 'tie'
    }
    if (compMove === 'rock' && playerMove === 'paper') {
        result = 'win'
        playerScore++
    }
    if (compMove === 'rock' && playerMove === 'scissors') {
        result = 'loss'
        compScore++
    }
    if (compMove === 'paper' && playerMove === 'rock') {
        result = 'loss'
        compScore++
    }
    if (compMove === 'paper' && playerMove === 'scissors') {
        result = 'win'
        playerScore++
    }
    if (compMove === 'scissors' && playerMove === 'rock') {
        result = 'win'
        playerScore++
    }
    if (compMove === 'scissors' && playerMove === 'paper') {
        result = 'loss'
        compScore++
    }
    //SCORE OUTPUT
    var scoreText = document.querySelector('#score');
    scoreText.value = 'COMPUTER' + ' ' + compScore + ' ' + 'PLAYER' + ' ' + playerScore
    //CONCLUSION OUTPUT
    if (result === 'tie') {
        return 'computer selected' + ' ' + compMove + ', ' + 'you selected' + ' '+ playerMove + '... ' + 'ITS A TIE! PLAY AGAIN!'
    }
    if (result === 'loss') {
        return 'computer selected' + ' ' + compMove + ', ' + 'you selected' + ' '+ playerMove + '... ' + 'YOU LOSE DUMMY!'
    }
    if (result === 'win') {
        return 'computer selected' + ' ' + compMove + ', ' + 'you selected' + ' '+ playerMove + '... ' + 'YOU WIN! GOOD JOB!'
    }
}
//CONCLUSION TO TEXTBOX
function conclusion () {
    var conclusion = rockPaperScissors();
    var conclusionText = document.querySelector('#conclusion');
    conclusionText.value = conclusion;
}
//BUTTON LISTENER
var btn = document.getElementById('shoot')
btn.addEventListener ("click", conclusion)






