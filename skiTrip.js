function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let thought = input[2];
    let roomPrice = 0;
    let nights = days - 1;

    switch (roomType) {
        case 'room for one person':
            roomPrice = 18 * nights; break;
        case 'apartment':
            roomPrice = 25 * nights;
            if (nights < 10) {
                roomPrice = roomPrice * 0.70;
            } else if (nights <= 15) {
                roomPrice = roomPrice * 0.65;
            } else if (nights > 15) {
                roomPrice = roomPrice * 0.50;
            }; break;
        case 'president apartment':
            roomPrice = 35 * nights;
            if (nights < 10) {
                roomPrice = roomPrice * 0.90;
            } else if (nights <= 15) {
                roomPrice = roomPrice * 0.85;
            } else if (nights > 15) {
                roomPrice = roomPrice * 0.80;
            }; break;
    }
    if (thought === 'positive') {
        roomPrice = roomPrice * 1.25;
        console.log(roomPrice.toFixed(2));
    } else {
        console.log((roomPrice * 0.90).toFixed(2));
    }
}
skiTrip(['30', 'president apartment', 'negative'])