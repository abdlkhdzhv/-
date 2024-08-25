function getComputerChoice() {
    let variants = ['Камень', 'Ножницы', 'Бумага'];
    const result = variants[Math.floor(Math.random() * variants.length)]

    return result
}

function getUserChoice() {
     return prompt('Ваш вариант', 'ножницы')
}
let sumComp = 0;
let sumUser = 0;
let sumRounds = 0

function playRound(playerSelection, getComputerVariant) {
    playerSelection = playerSelection.toLowerCase();
    getComputerVariant = getComputerVariant.toLowerCase();

    if(playerSelection === getComputerVariant) {
        return `Ничья! Счет пользователя - ${sumUser} : Счет компьютера - ${sumComp}, Всего раундов = ${++sumRounds}`
    }

    if (sumRounds >= 5) {
        sumComp = 0;
        sumUser = 0;
        sumRounds = 0;
    }

    if(
        (playerSelection === 'камень' && getComputerVariant === 'ножницы')||
        (playerSelection === 'ножницы' && getComputerVariant === 'бумага')||
        (playerSelection === 'бумага' && getComputerVariant === 'камень')
    ){
        return `Вы победили!
        Счет пользователя - ${++sumUser} : Счет компьютера - ${sumComp}, Всего раундов = ${++sumRounds}`
    } else {
        return `Вы проиграли! Счет пользователя - ${sumUser} : Счет компьютера - ${++sumComp}, Всего раундов = ${++sumRounds}`
    }
}

function game() {
    let sumUser = 0;
    let sumComp = 0;
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = getUserChoice ();
        const computerSelection = getComputerChoice ();
        const resultRound = playRound(playerSelection, computerSelection);
        console.log(resultRound);

        if (resultRound.slice(0, 13) == 'Вы проиграли!') {
            sumComp += 1;
        } else if (resultRound.slice(0, 12) == 'Вы выиграли!') {
            sumUser += 1;
        } else {
            sumComp = sumComp;
            sumUser = sumUser;
        }  
    } 
    return `Счет пользователя - ${sumUser} : Счет компьютера - ${sumComp}`
}

// console.log(game())
let playerSelection;
let getComputerVariant;

const buttons = document.querySelector('.wrapper-buttons');

const choiсePlayers = document.createElement('p');
container.appendChild(choiсePlayers);

const resultRound = document.createElement('p');
container.appendChild(resultRound)

buttons.addEventListener('click', (event) => {
    let target = event.target; 

    switch(target.id){
        case 'rock' :         
        playerSelection = "Камень";
        getComputerVariant = getComputerChoice();
        choiсePlayers.textContent = `Ваш выбор - ${playerSelection} : Выбор компьютера - ${getComputerVariant};`;
        resultRound.textContent = playRound(playerSelection, getComputerVariant);
        break;
        case 'paper' : 
        playerSelection = "Бумага";
        getComputerVariant = getComputerChoice();
        choiсePlayers.textContent = `Ваш выбор - ${playerSelection} : Выбор компьютера - ${getComputerVariant};`;
        resultRound.textContent = playRound(playerSelection, getComputerVariant);
        break;
        case 'scissors' : 
        playerSelection = "Ножницы";
        getComputerVariant = getComputerChoice();
        choiсePlayers.textContent = `Ваш выбор - ${playerSelection} : Выбор компьютера - ${getComputerVariant};`;
        resultRound.textContent = playRound(playerSelection, getComputerVariant);
    }
});