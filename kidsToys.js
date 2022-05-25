function kidsToys(input){
 let trip = Number(input[0]);
 let puzzles = Number(input[1]);
 let dolls = Number(input[2]);
 let bears = Number(input[3]);
 let minions = Number(input[4]);
 let trucks = Number(input[5]);
 let toyCount = puzzles + dolls + bears + minions + trucks;
 let toysPrice = (puzzles * 2.60) + (dolls * 3) + (bears * 4.10) + (minions * 8.20) + (trucks * 2);
if (toyCount >= 50) {
    toysPrice = toysPrice * 0.75;
}
 let moneyRent = toysPrice * 0.90;
 if (moneyRent >= trip){
     let moneyAfterTrip = moneyRent - trip;
     console.log(`Yes! ${(moneyAfterTrip).toFixed(2)} lv left.`)
 } else {
    let notEnoughMoney =  trip - moneyRent;
     console.log(`Not enough money! ${(notEnoughMoney).toFixed(2)} lv needed. `)
 }
}

kidsToys(["320", "8", "2", "5", "5", "1"]);