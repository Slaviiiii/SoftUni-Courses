function shopping(input){
 let budget = Number(input[0]);
 let videoCards = Number(input[1]);
 let processors = Number(input[2]);
 let ram = Number(input[3]);

 let sumVideoCards = videoCards * 250;
 let sumProccesors =   sumVideoCards * 0.35;
 let sumForProccesors = processors * sumProccesors;
 let ramPrice = sumVideoCards * 0.10;
 let sumForRam = ram * ramPrice;
 let finalSum = sumForRam + sumForProccesors + sumVideoCards;

 if ( videoCards > processors){
      finalSum = finalSum * 0.85;
 }

 if(finalSum <= budget){
     console.log(`You have ${(budget - finalSum).toFixed(2)} leva left!`);
 } else {
     console.log(`Not enough money! You need ${(finalSum - budget).toFixed(2)} leva more!`)
 }
}
shopping(["920.45","3", "1", "1"])