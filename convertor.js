function books(input){
let kvM = Number(input[0])* 7.61;
let discount = 18/100;
let sumForKvM = kvM * discount;
let finalSum = kvM - sumForKvM;
let res = `The final price is: ${finalSum}lv.
The discount is: ${sumForKvM}lv. `

console.log(res);
}
books(["150"])
