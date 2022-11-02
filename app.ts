function combine(input1: number | string,input2:number | string){
  let result;
  if(typeof input1 === 'number' && typeof input2 === 'number'){
  result = input1 + input2;
} else {
  result = input1.toString() + input2.toString();
}
return result
}

const number1 = 30;
const number2 = 26;

const combinedAges = combine(number1, number2);
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);

const literal = "ring";