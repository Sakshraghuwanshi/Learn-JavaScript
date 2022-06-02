const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    
    switch (randomNumber) {
    case 0 :
    return 'rock';
    case 1 :
    return "paper";
    case 2 : 
    return "scissors";
    }
};

const determineWinner = (userChoice , computerChoice) => {
    if(userChoice === computerChoice) {
        console.log('it a tie')
        return;
    }

    if(userChoice === 'rock' && computerChoice === 'paper') {
        console.log('computer wins')
    } else if(userChoice === 'paper' && computerChoice === 'rock') {
        console.log('user wins')
    } 
    if(userChoice === 'scissors' && computerChoice === 'paper') {
        console.log('user win')
    } else if(userChoice === 'paper' && computerChoice === 'scissors') {
        console.log('computer wins')
    } 
    if(userChoice === 'rock' && computerChoice === 'scissors') {
        console.log('user wins')
    } else if(userChoice === 'scissors' && computerChoice === 'rock') {
        console.log('computer wins')
    }

};

const playGame = () => {
    const userChoice = 'scissors';
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
};


playGame();