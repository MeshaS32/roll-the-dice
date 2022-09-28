const prompt = require('prompt-sync')({sigint: true});

let rNum = Number(prompt(`Enter a side between 1 and 6 `))

let diceRoll = Math.ceil(Math.random()*6) 

console.log(`Actual diceRoll:` + diceRoll)
if(diceRoll === 5){
    console.log(rNum)
} else {
    console.log(diceRoll)
}

