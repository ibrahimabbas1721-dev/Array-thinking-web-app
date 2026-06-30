const ans = document.getElementById("ans");
const lar = document.getElementById("large");
const sma = document.getElementById("Small");
const sum = document.getElementById("Sum");
const avg = document.getElementById("Avg");

const ze = document.getElementById("zero");
const pNum = document.getElementById("posNum");
const nNum = document.getElementById("negNum");
const eNum = document.getElementById("even");
const oNum = document.getElementById("odd");

const sub_btn = document.getElementById("sub");
const limit = 1000;

// helper function for edge cases
function resetUi(message) {
  ans.innerText = message;
  lar.innerText = "Largest Number is : None ";
  sma.innerText = "Small Number is : None ";
  sum.innerText = "Sum of all Number is : None ";
  avg.innerText = "Averge of all Number is : None ";
  
  ze.innerText = "Number of Zero : None ";
  pNum.innerText = "Number of positive numbers : None ";
  nNum.innerText = "Number of nagitive numbers : None ";
  eNum.innerText = "Number of even numbers : None ";
  oNum.innerText = "Number of odd numbers : None ";

  return;
}

function analyzNum(input) {
  return input
    .split(",")
    .map((v) => v.trim())
    .filter((v) => v !== "")
    .map(Number);
}

sub_btn.onclick = () => {
  let inpVal = document.getElementById("arr").value.trim();
  if (!inpVal) {
    resetUi("Input is Empty");
    return;
  }
  let arr = analyzNum(inpVal);
  // analyzing the array
  if (arr.length === 0) return;
  let max = arr[0];
  let min = arr[0];
  let total = 0;
  let zero = 0;
  let PosNum = 0;
  let NegNum = 0;
  let evenNum = 0;
  let oddNum = 0;
  for (let num of arr) {
    if (Number.isNaN(num)) {
      resetUi("Invalid Input");
      return;
    }
    if (num < -limit || num > limit) {
      resetUi("Limit Exceeded");
      return;
    }
    if (num > max) max = num;
    if (num < min) min = num;
    total += num;
    if(num === 0) zero++;
    else if(num < 0) NegNum++;
    else PosNum++;

    if(Number.isInteger(num)){
        if(num % 2 === 0) evenNum++;
        else oddNum++;
    }
}
  lar.innerText = "Largest Number is : " + max;
  sma.innerText = "Small Number is : " + min;
  sum.innerText = "Sum of all Number is : " + total;
  avg.innerText = "Averge of all Number is : " + total / arr.length;

    ze.innerText = "Number of Zero : " + zero;
  pNum.innerText = "Number of positive numbers : " + PosNum;
  nNum.innerText = "Number of nagitive numbers : " + NegNum;
  eNum.innerText = "Number of even numbers : " + evenNum;
  oNum.innerText = "Number of odd numbers : " + oddNum;
};
