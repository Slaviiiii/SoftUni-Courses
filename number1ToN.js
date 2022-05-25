function number1ToN(input) {
    let n = Number(input[0]);
    for (let i = 1; i <= n; i += 3) {
        console.log(i);
    }
}
number1ToN(['15'])