const operand1 = 10;
let operand2 = 4;

let sign = "/"

switch(sign) {
    case "/": 
    console.log();
    if(operand2 == 0) {
        console.log("0")
    }
    else {
        console.log(operand1 / operand2)
    }
    break;

    case "*": 
    console.log();
    if(operand2 == 0) {
        console.log("0")
    }
    else {
        console.log(operand1 * operand2)
    }
    break;
    case "+":
        console.log(operand1 + operand2)
    break;
    case "-":
        console.log(operand1 - operand2)
    break;
}
// сложностей не было всё так как вы объясняли :D