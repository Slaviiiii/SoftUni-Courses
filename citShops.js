function cityShops(input){
let product = input[0];
let city = input[1];
let quanity = Number(input[2]);
let result = 0;

if(city === "Sofia"){

 switch(product){
 case "coffee": result = quanity * 0.50 ;break;
 case "water":result = quanity * 0.80 ;break;
 case "beer":result = quanity * 1.20;break;
 case "sweets":result = quanity * 1.45;break;
 case "peanuts":result = quanity * 1.60;break;

 }

} else if(city === "Plovdiv"){

    switch(product){
 case "coffee": result = quanity * 0.40 ;break;
 case "water":result = quanity * 0.70;break;
 case "beer":result = quanity * 1.15;break;
 case "sweets":result = quanity * 1.30;break;
 case "peanuts":result = quanity * 1.50;break;
}
} else if(city === "Varna"){

    switch(product){
 case "coffee": result = quanity * 0.45 ;break;
 case "water":result = quanity * 0.70;break;
 case "beer":result = quanity * 1.10;break;
 case "sweets":result = quanity * 1.35;break;
 case "peanuts":result = quanity * 1.55;break;
}
}
console.log(result);
}
cityShops(["beer", "Sofia", "2"])