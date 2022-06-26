heading = document.createElement("calculator");
heading = document.createElement("div");
heading_text = document.createTextNode("Calculator");
heading.appendChild(heading_text);
heading.classList.add("heading");
document.body.appendChild(heading);

let inputCalculator = document.createElement("input");
document.body.appendChild(inputCalculator);
inputCalculator.classList.add("input-calculator");

let numberData = JSON.parse(data);

for (let i = 0; i < numberData.length; i++) {
  let a = numberData[i].number;
  let number = document.createElement("button");
  let numberText = document.createTextNode(a);
  number.appendChild(numberText);
  // document.body.appendChild(number);
  number.appendChild(numberText);
  number.classList.add("number_" + a,"number");
  document.body.appendChild(number);
  number.addEventListener("click",  (e) => {
    inputCalculator.value += e.target.innerText;
  })
}

let signData = JSON.parse(sign);

for (let i = 0; i < signData.length; i++) {
  let b = signData[i].sign;
  let sign = document.createElement("button");
  let signText = document.createTextNode(b);
  sign.appendChild(signText);
  document.body.appendChild(sign);
  sign.appendChild(signText);
  sign.classList.add("sign_" + b,"sign");
  sign.addEventListener("click",  (e) => {
    inputCalculator.value += e.target.innerText;
  })
}

let sumData = JSON.parse(sum);
for (let i = 0; i < sumData.length; i++) {
  let b = sumData[i].sum;
  let sum = document.createElement("button");
  let sumText = document.createTextNode(b);
  sum.appendChild(sumText);
  document.body.appendChild(sum);
  sum.appendChild(sumText);
  sum.classList.add("sum");
  sum.addEventListener("click",  (e) => {
    // let result = math.evaluate(inputCalculator.value);
    // inputCalculator.value = result;
    let sign_match = inputCalculator.value.match(/(\+|\-|\*|\/|\*\*)/);
    console.log(inputCalculator.value);
    console.log(sign_match);
    let sign = sign_match[0];

    let x_match = inputCalculator.value.match(/\d+/);
    let x = parseInt(x_match);
    let y_match = inputCalculator.value.match(/\d+$/);
    let y = parseInt(y_match);

    if (sign=="+") result = x+y;
    else if (sign=="-") result = x-y;
    else if (sign=="*") result = x*y;
    else if (sign=="/") result = x/y;
    else if (sign=="^") result = Math.pow(x,y);

    inputCalculator.value = result;

  })
}

let deleteData = JSON.parse(del);
for (let i = 0; i < deleteData.length; i++) {
  let c = deleteData[i].delete;
  let del = document.createElement("button");
  let deleteText = document.createTextNode(c);
  del.appendChild(deleteText);
  document.body.appendChild(del);
  del.appendChild(deleteText);
  del.classList.add("sum");
  del.addEventListener("click",  (e) => {
    inputCalculator.value = "";
  })
}

