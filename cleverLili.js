function cleverLily(input) {
    let lilisAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let oneToyPrice = Number(input[2]);

    let toyCount = 0;
    let stolenMoney = 0;
    let savedMoney = 0;
    let addedMoney = 10;

    for (let i = 1; i <= lilisAge; i++) {
        if (i % 2 === 0) {
            savedMoney += addedMoney;
            stolenMoney++;
            addedMoney += 10;
        } else {
            toyCount++;
        }
    }
    let totalToyPrice = toyCount * oneToyPrice;
    let totalSavedMoney = (savedMoney + totalToyPrice) - stolenMoney;
    if (totalSavedMoney >= washingMachinePrice) {
        console.log(`Yes! ${(totalSavedMoney - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - totalSavedMoney).toFixed(2)}`);
    }
}
cleverLily(['21', '1570.98', '3'])
