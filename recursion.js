//Counting Sheep
//Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.
console.log('Counting Sheep')
let num = 4;
function sheep(num){
  //base
  if(num == 0){
    console.log("All the sheep jumped over the fence");
  }
  //general
  else{
  console.log(`${num}:Sheep jumped over the fence`);
  sheep(num - 1);
  }
}

sheep(num);

//Power Calculator
//Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)
console.log('Power Calculator')

function powerCalculator(baseInt, exp){
  if(exp < 0){
    return 'exponent should be greater than or equal to 0'
  }
  if(exp === 0){
    return 1;
  } 
    return baseInt * powerCalculator(baseInt, exp - 1)
}
console.log(`${powerCalculator(10, 4)}`)

//Reverse String
//Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.
console.log('Reverse String');

reverseString = (x) =>{
  if(x === ''){
    return '';
  }

  return reverseString(x.slice(1)) + x.charAt(0)
}
console.log(reverseString('myAwesomeString'))

//nth Triangular Number
//Calculate the nth triangular number. 
//A triangular number counts the objects that can form an equilateral triangle. 
//The nth triangular number is the number of dots composing a triangle with n dots on a side, 
//and is equal to the sum of the n natural numbers from 1 to n. 
//This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

//nth number === x[(n-1)] + n
console.log('Triangle Number')
function triangleNumber(n){
  if(n === 1){
    return 1;
  }
  return n + triangleNumber(n-1)

}
console.log(triangleNumber(9))