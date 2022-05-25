function cinema(input){
let day = input[0];
let ticketPrice = 0;

switch(day){
case 'Monday':
case 'Tuesday':ticketPrice = 12;
console.log(ticketPrice);break;

case 'Wednesday':
case 'Thursday':ticketPrice = 14;
console.log(ticketPrice);break;

case 'Friday':ticketPrice = 12;
console.log(ticketPrice);break;

case 'Saturday':
case 'Sunday':ticketPrice = 16;
console.log(ticketPrice);break;
}
}
cinema(["Monday"])