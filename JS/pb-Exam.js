function demo(input) {
    let aluminumWCount = Number(input[0]);
    let aluminumWindowsType = input[1];
    let comand = input[2];
    let aluminumWindowsPrice = 0;
    let percentOff = 0;
    switch (aluminumWindowsType) {
        case '90X130':
            aluminumWindowsPrice = 110;
            if (aluminumWCount > 30 && aluminumWCount <= 60) {
                percentOff = 0.95;
                break;
            } else if (aluminumWCount > 60) {
                percentOff = 0.98;
                break;
            }
        case '100X150':
            aluminumWindowsPrice = 140;
            if (aluminumWCount > 40 && aluminumWCount <= 80) {
                percentOff = 0.94;
                break;
            } else if (aluminumWCount > 80) {
                percentOff = 0.90;
                break;
            }
        case '130X180':
            aluminumWindowsPrice = 190;
            if (aluminumWCount > 20 && aluminumWCount <= 50) {
                percentOff = 0.93;
                break;
            } else if (aluminumWCount > 50) {
                percentOff = 0.88;
                break;
            }
        case '200X300':
            aluminumWindowsPrice = 190;
            if (aluminumWCount > 25 && aluminumWCount <= 50) {
                percentOff = 0.91;
                break;
            } else if (aluminumWCount > 50) {
                percentOff = 0.86;
                break;
            }
            if(aluminumWCount < 10){
                console.log(`Invalid order`);
                break;
            }    
    }
    let totalSum = (aluminumWCount * aluminumWindowsPrice) * percentOff;

    if (comand === 'With delivery') {
        totalSum += 60;
    }
    if (aluminumWCount > 99) {
        totalSum = totalSum * 0.96;
    }
    console.log(`${totalSum.toFixed(2)} BGN`);
}
demo(["2", "90X130", "Without delivery"])