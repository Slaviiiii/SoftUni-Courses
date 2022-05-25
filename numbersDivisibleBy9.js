function numbersDivisibleBy9(input) {
    let numStart = Number(input[0]);
    let numEnd = Number(input[1]);
    let sum = 0;
    for (let i = numStart; i <= numEnd; i++) {
        if (i % 9 === 0) {
            sum += i;
        }

    }
    console.log(`The sum: ${sum}`);
    for (let i = numStart; i <= numEnd; i++) {
        if (i % 9 === 0) {
            sum += i;
            console.log(i);
        }
    }
}
numbersDivisibleBy9([100, 200])