function worldRecord(input){
let record = Number(input[0]);
let distance = Number(input[1]);
let secondsfor1M = Number(input[2]);

let swimingDistance = distance * secondsfor1M;
let moreSeconds = (Math.floor(distance/15)) * 12.5;
let allTime = moreSeconds + swimingDistance;

if (record > allTime){
    console.log(`Yes, he succeeded! The new world record is ${(allTime).toFixed(2)} seconds.`);
    
  } else {  
    console.log(`No, he failed! He was ${(allTime - record).toFixed(2)} seconds slower.`);
}

}
worldRecord(["55555.67", "3017", "5.03"]);