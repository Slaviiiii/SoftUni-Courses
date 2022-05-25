function lunchBreak(input){
 let filmName = input[0];
 let timeForEpisod = Number(input[1]);
 let breakTime = Number(input[2]);
 let foodTime = breakTime * 1/8;
 let timeForRest = breakTime * 1/4;
 let finalTime = breakTime - timeForRest - foodTime;

 if(finalTime >= timeForEpisod){
     console.log(`You have enough time to watch ${filmName} and left with ${Math.ceil(finalTime - timeForEpisod)} minutes free time.`)
 } else {
     console.log(`You don't have enough time to watch ${filmName}, you need ${Math.ceil(timeForEpisod - finalTime)} more minutes. `)
 }
}
lunchBreak(["Game of Thrones", "60", "96"])