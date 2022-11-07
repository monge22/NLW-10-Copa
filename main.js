function createGame(player1, hour, player2) {
    return `
    
    <li>
        <img src="./assets/logo-${player1}.svg" alt="bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/logo-${player2}.svg" alt="bandeira do ${player2}">
    </li>
    
    `
}

let delay = -0.4;
function createCard(date, day, games){
    delay = delay + 0.4;
    return `
            <div class="card" style="animation-delay: ${delay}s">
                <h2>${date}<span>${day}</span></h2>
                <ul>
                   ${games}
                </ul>
            </div>
    
    `
}



document.querySelector('.cards').innerHTML = 

    
        createCard('24/11', 'quinta', createGame('brazil', '16:00', 'Serbia')) +
       
        createCard('28/11', 'segunda', createGame('brazil', '13:00', 'switzerland')
        + createGame('Portugal', '16:00', 'Uruguay')) +
        
        createCard('02/12', 'sexta', createGame('cameroon', '16:00', 'Brazil') 
        + createGame('SouthKorea', '12:00', 'Portugal'))
    
