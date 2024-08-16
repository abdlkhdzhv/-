function getComputerChoice() {
    let variants = ['камень', 'ножницы', 'бумага'];
    const result = variants[Math.floor(Math.random() * variants.length)]

    return result
}

function getUserChoice() {
     return prompt('Ваш вариант', 'ножницы')
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'ножницы' && computerSelection == 'камень') {
        return ('Вы проиграли! Камень побеждает Ножницы.')
    } else if (playerSelection.toLowerCase() == 'камень' && computerSelection == 'ножницы') {
        return ('Вы выиграли! Камень побеждает Ножницы.')
    } else if (playerSelection.toLowerCase() == 'бумага' && computerSelection == 'ножницы') {
        return ('Вы проиграли! Бумага уступает Ножницам.')
    } else if (playerSelection.toLowerCase() == 'ножницы' && computerSelection == 'бумага') {
        return ('Вы выиграли! Ножницы побеждают Бумагу.')
    } else {
        return ('Ничья!')
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

console.log(game())