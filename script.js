let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el"); //document.querySelector("#sum-el")
let player = {
    name: "Aldo",
    chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;

    if (randomCard > 10) {
        return 10;
    } else if (randomCard === 1) {
        return 11;
    } else {
        return randomCard;
    }


    // if (randomCard === 1) {
    //     randomCard = 11;
    // }
    // if (randomCard === 11) {
    //     randomCard = 10;
    // } else if (randomCard === 12) {
    //     randomCard = 10;
    // } else if (randomCard === 13) {
    //     randomCard = 10;
    // }

    // return randomCard;
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you wanna draw a new card?";
    } else if (sum === 21) {
        message = "You've got a Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You lose!";
        isAlive = false;
    }
    // a better way to display the messageEl.textContent without repeating the code under each condition.
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard();
        sum += thirdCard;
        cards.push(thirdCard);
        renderGame();

    // cardsEl.textContent = cardsEl.textContent + " " + thirdCard;
    }
}



//console.log(hasBlackJack);
//console.log(isAlive);



// let age = 12;

// if (age < 21){
//     console.log("You are not allowed in the club!")
// } else {
//     console.log("You are welcome!!")
// }

// let age = 12

// if (age < 100){
//     console.log("Not eligible")
// } else if (age === 100){
//     console.log("Here is your birthday card from the king!")
// } else {
//     console.log("Not eligible, you have already gotten one.")
// }

// let myArray = [
//     "HTML",
//     "CSS",
//     "Bootstrap",
//     "TailwindCSS",
//     "JavaScript",
//     "React",
//     "NodeJS"
// ];

// console.log(myArray[2])
// console.log(myArray[4])
// console.log(myArray[6])
// console.log(myArray.length)

// let mySelf = [
//     "aldo",
//     32,
//     true
// ]

// let messages = [
//     "Hello, how is it going?",
//     "I'm fine, thank you!",
//     "I'm doing great, thank you!",
//     "all good, thank you!",
//     "Having a not so good day, thank you!",
//     "I'm sorry to hear that, thank you!",
// ];
// for (let i = 0 ; i < messages.length; i+= 1){
//     console.log(messages[i])
// }

// let newMessage = "Have a nice day!";
// messages.push(newMessage);
// messages.pop(messages)

// console.log(messages);

//    START          FINISH     COUNT STEP(S)    
// for (let count = 10; count < 21; count += 1) {
//     console.log(count);
// }

// for (let i = 10; i < 101; i += 10) {
//     console.log(i);
// }

// let cards2 = [7, 3, 9]
// for (let i = 0; i < cards2.length; i += 1) {
//     console.log(cards2[i])
// }


// let player1Time = 60;
// let player2Time = 57;

// function totalRaceTime(){
//     let totalTime = player1Time + player2Time;
//     return totalTime;
// }

// let totalTime = totalRaceTime();
// console.log(totalTime);

// This generates a random number from 1 to 6
// let randomNumber = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber)

// Logical AND operator
// let hasCompletedCourse = true;
// let givesCertificate = true;

// if (hasCompletedCourse === true && givesCertificate === true) {
//     generateCertificate()
// }

// function generateCertificate() {
//     console.log("Generating Certificate")
// }

//Logical OR operator
// let likesDocumentaries = true
// let likesStartUps = false

// if (likesDocumentaries === true || likesStartups === true) {
//     recommendMovie()
// }

// function recommendMovie() {
//     console.log("Hey, check out this new movie we think you will like!")
// }