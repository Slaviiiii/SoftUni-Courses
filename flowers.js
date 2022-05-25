function gardenFlowers(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let totalSum = 0;

    switch (flowerType) {
        case 'Roses':
            totalSum = flowerCount * 5;
            if (flowerCount > 80) {
                totalSum = totalSum * 0.90;
            }
            break;
        case 'Dahlias':
            totalSum = flowerCount * 3.8;
            if (flowerCount > 90) {
                totalSum = totalSum * 0.85;
            }
            break;
        case 'Tulips':
            totalSum = flowerCount * 2.8;
            if (flowerCount > 80) {
                totalSum = totalSum * 0.85;
            }
            break;
        case 'Narcissus':
            totalSum = 3 * flowerCount;
            if (flowerCount < 120) {
                totalSum = totalSum * 1.15;
            }
            break;
        case 'Gladiolus':
            totalSum = flowerCount * 2.5;
            if (flowerCount < 80) {
                totalSum = totalSum * 1.20;
            }
            break;
    }
    if (totalSum <= budget) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - totalSum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`);
    }
}

gardenFlowers(['Dahlias', '112', '460'])