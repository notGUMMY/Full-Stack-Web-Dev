let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
let card = [firstCard, secondCard]
console.log(messageEl)
console.log(sumEl)
console.log(cardEl)

function startGame() {
    renderGame()
}

function renderGame() {
    if (sum < 21) {
    message = "Do you want to draw a new card?"
    } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
    } else {
    message = "You're out of the game!"
    isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: " + card[0] + " " + card[1]
}

function newCard() {
    let card = 6
    sum += card
    card.push(card)
    console.log("Drawing a new card from the deck!")
    renderGame()
}