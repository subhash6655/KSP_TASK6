//Operators

let number1 = 4;
let number2 = 2;

console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 % number2);


//Assignment operators

number1+=5
console.log(number1)

number1-=2
console.log(number1)

number1 *=2
console.log(number1)

number1**=2
console.log(number1)


//Comparision operators

let n1 = 10;
let task = "10";
let n2 = 15;
console.log(n1==task);
console.log(n1===task);
console.log(n1!=task);
console.log(n1<=n2);
console.log(n1<n2);
console.log(n1>=n2);


// logical operators


let name = 20;
let place = 40;
console.log(!name==25);
console.log(name<10 && place<20);
console.log(name==20 || place==40);


// functions
function subhash(){
    console.log("This is function");
}
subhash()

//parameters and arguments
function Addition(n1 , n2){
    console.log(n1 + n2);
}   

Addition(10,20);

//userinput
let num1 = parseInt(prompt("Enter num1:"));
let num2 = parseInt(prompt("Enter num2:"));
console.log(num1 + num2);

//datatypes
let constant = 10;
console.log(constant);

let decimal = 11.269365;
console.log(decimal);

let character = "subhash";
console.log(character);