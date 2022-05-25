function trainingCamp(input) {
    let groupsCount = Number(input[0]);
    let people = 0;
    let Musala = 0, Monblan = 0, Kilimandjaro = 0, k2 = 0, Everest = 0;



    for (let index = 1; index <= groupsCount; index++) {
        group = Number(input[index]);
        people += group;

        if (group <= 5) {
            Musala += group;
        } else if (group > 5 && group <= 12) {
            Monblan += group;
        } else if (group > 12 && group <= 25) {
            Kilimandjaro += group;
        } else if (group > 25 && group <= 40) {
            k2 += group;
        } else if (group > 40) {
            Everest += group;
        }

    }
    console.log(`${(Musala / people * 100).toFixed(2)}%`);
    console.log(`${(Monblan / people * 100).toFixed(2)}%`);
    console.log(`${(Kilimandjaro / people * 100).toFixed(2)}%`);
    console.log(`${(k2 / people * 100).toFixed(2)}%`);
    console.log(`${(Everest / people * 100).toFixed(2)}%`);
}
trainingCamp(['10', '10', '5', '1', '100', '12', '26', '17', '37', '40', '78'])