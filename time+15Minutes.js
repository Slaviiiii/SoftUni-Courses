function timeMinutes(input){
let hours = Number(input[0]);
let minutes = Number(input[1]) + 15;

if (minutes > 59){
    hours = hours + 1;
    minutes = minutes - 60;

}if (hours > 23){
    hours = hours - 24;

}if (minutes < 10){
    res = (`${hours}:0${minutes}`); 
    console.log(res);

} else {
    res = (`${hours}:${minutes}`);
    console.log(res);
}
}
timeMinutes([0, 45])