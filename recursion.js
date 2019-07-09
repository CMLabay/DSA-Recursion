//Counting Sheep
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