function licaNaFiguri(input){
let shape = input[0];
let res = 0;

if (shape === "square"){
    let sideA = Number(input[1]);
     res = sideA * sideA;
}else if (shape === "rectangle"){
    let sideA = Number(input[1]);
    let sideB = Number(input[2]);
     res = sideA * sideB;
}else if (shape === "circle"){
    let r = Number(input[1]);
     res = Math.pow(r,2)* Math.PI;

}else  {
    let sideA = Number(input[1]);
    let sideB = Number(input[2]);
     res = sideA * sideB / 2;
}
  console.log(res.toFixed(3))
}
licaNaFiguri(["square", "5", "20"]);