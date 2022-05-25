function godzilaVsCong(input){
let budget = Number(input[0]);
let exstras = Number(input[1]);
let clothesForExstras = Number(input[2]);

let sumForDecor = budget * 0.1;
let sumForClothes = exstras * clothesForExstras;
let totalMoney = sumForDecor + sumForClothes;

if (exstras > 150){
    sumForClothes = sumForClothes * 0.9;
}
let totalSum = sumForDecor + sumForClothes;
if (budget >= totalSum){
console.log(`Action!`);
console.log(`Wingard starts filming with ${(budget - totalSum).toFixed(2)} leva left.`);
}  else {
sumForClothes * 0.1
console.log(`Not enough money!`)
console.log(`Wingard needs ${(totalSum - budget).toFixed(2)} leva more.`);
}
}
godzilaVsCong(["9587.88", "222", "55.68"])