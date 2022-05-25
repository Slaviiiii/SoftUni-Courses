function bonusPoints(input){
  let cqloChislo = Number(input[0]);
  let bonus = 0;

 if (cqloChislo <= 100){
     bonus = 5;
 

} else if  (cqloChislo > 1000) {
    bonus = cqloChislo * 0.10;


} else {
  bonus = cqloChislo * 0.20;
  
}
if (cqloChislo % 2 === 0) {
bonus += 1;

} else if (cqloChislo % 10 === 5) {
    bonus += 2;
}
    console.log (bonus)
console.log(cqloChislo + bonus )
 
}

bonusPoints(["15875"])