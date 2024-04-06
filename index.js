// DICE ROLLER PROGRAM

function RollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceresult = document.getElementById("diceresult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="DiceImages/dice${value}.png"alt="dice${value}">`);
    }

    diceresult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join(" ");
 }

