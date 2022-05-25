function timeForExam(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let studentHour = Number(input[2]);
    let studentMinutes = Number(input[3]);

    let allExamMin = examHour * 60 + examMinutes;
    let AllArrivalMin = studentHour * 60 + studentMinutes;
    let time = Math.abs(allExamMin - AllArrivalMin)

    if (allExamMin < AllArrivalMin) {
        console.log(`Late`);

        if (time >= 60) {
            let h = Math.floor(time / 60);
            let min = time % 60;
            if (min < 10) {
                console.log(`${h}:0${min} hours after the start`);
            } else {
                console.log(`${h}:${min} hours after the start`);
            }
        } else {
            console.log(`${time} minutes after the start`);
        }


    } else if (allExamMin - AllArrivalMin <= 30) {
        console.log(`On time`);
        if (time !== 0) {
            console.log(`${time} minutes before the start`);
        }


    } else {
        console.log(`Early`);
        if (time >= 60) {
            let h = Math.floor(time / 60);
            let min = time % 60;
            if (min < 10) {
                console.log(`${h}:0${min} hours before the start`);
            } else {
                console.log(`${h}:${min} hours before the start`);
            }
        } else {
            console.log(`${time} minutes before the start`);
        }
    }
}
timeForExam(["10","00","10","00"])


