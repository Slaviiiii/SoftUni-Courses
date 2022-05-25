function histogram(input) {
    let numbersCount = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (let index = 1; index <= numbersCount; index++) {
        let curentNumber = Number(input[index])

        if (curentNumber < 200) {
            p1++;
        } else if (curentNumber <= 399) {
            p2++;
        } else if (curentNumber <= 599) {
            p3++;
        }
        else if (curentNumber <= 799) {
            p4++;
        }
        else if (curentNumber >= 800) {
            p5++;
        }
        console.log(`${(p1 / numbersCount * 100).toFixed(2)}%`);
        console.log(`${(p2 / numbersCount * 100).toFixed(2)}%`);
        console.log(`${(p3 / numbersCount * 100).toFixed(2)}%`);
        console.log(`${(p4 / numbersCount * 100).toFixed(2)}%`);
        console.log(`${(p5 / numbersCount * 100).toFixed(2)}%`);
    }
}
histogram([3, 1, 2, 999])