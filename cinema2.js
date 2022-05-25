function cinema(input) {
    let projection = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    if (projection === 'Premiere') {
        projection = "12";
    } else if (projection === 'Normal') {
        projection = "7.5";
    } else if (projection === 'Discount') {
        projection = "5";
    }

    console.log(`${(projection * rows * columns).toFixed(2)} leva`);

}
cinema(["Discount",
    "12",
    "30"])








