let numOne;
let numTwo;
let min;
let max;
let result;

while (true) {
  numOne = +prompt("Enter number 1");
  numTwo = +prompt("Enter number 2");

  if (!isNaN(numOne) && !isNaN(numTwo)) {
    break;
  } else {
    alert("Input incorrect");
    continue;
  }
}

if (numOne >= numTwo) {
  max = numOne;
  min = numTwo;
} else {
  max = numTwo;
  min = numOne;
}

for (let i = min; min > 0; i--) {
  if (max % i === 0 && min % i === 0) {
    result = i;
    break;
  }
}

alert("result=" + result);
