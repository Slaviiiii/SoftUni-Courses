function birthdayParty(input) {
    let roomRent = Number(input[0]);
    let cakePrice = roomRent * 0.20;
    let drinksPrice = cakePrice * 0.55;
    let animatorPrice = roomRent / 3;
    let totalSum = roomRent + cakePrice + drinksPrice + animatorPrice;
    console.log(totalSum);
}
birthdayParty(2250);