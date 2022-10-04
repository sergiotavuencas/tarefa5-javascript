// Refatorações
function createText(quantity, multiplyFor) {
  let value = "";

  for (var i = 0; i < quantity; i++) {
    value +=
      i < (quantity - 1) ?
        (i + 1) * multiplyFor + ", "
        : (i + 1) * multiplyFor;
  }

  return value;
}

function operationResult(mathOperation, firstValue, secondValue) {
  if (mathOperation === "+") {
    return firstValue + secondValue;
  } else if (mathOperation === "-") {
    return firstValue - secondValue;
  } else if (mathOperation === "*") {
    return firstValue * secondValue;
  } else if (mathOperation === "/") {
    if (secondValue === 0) {
      return firstValue / secondValue + " and Beyond";
    }
    return firstValue / secondValue;
  }
}

// Funções principais
function showTenToOneHundread() {
  let ex2 = document.getElementById("ex2");
  ex2.innerHTML = createText(10, 10);
}

function showNumberFiveMultiplicationTable() {
  let ex3 = document.getElementById("ex3");
  ex3.innerHTML = createText(10, 5);
}

function getMultiplicationTableFor() {
  let ex4 = document.getElementById("ex4");
  let number = document.getElementById("multiple-for").value;
  ex4.innerHTML = createText(10, number);
}

function getOperation(operation) {
  let paragraph = document.getElementById("ex5");
  let result;

  let value1 = parseFloat(document.getElementById("value1").value);
  let value2 = parseFloat(document.getElementById("value2").value);

  if (isNaN(value1) || isNaN(value2)) {
    result = "Digite algum valor em ambos os campos";
  } else {
    result = "Resultado = " + operationResult(operation, value1, value2);
  }

  paragraph.innerHTML = result;
}

function showOnlyEven() {
  let ex6 = document.getElementById("ex6");
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  array
    .filter((number) => number % 2 === 0)
    .forEach((n) => {
      ex6.innerHTML += n + " ";
    });
}

function calculateNewCarCost() {
  let factoryCost = parseFloat(document.getElementById("custoFabrica").value);
  let distributorPercentual = parseFloat(document.getElementById("percDistribuidor").value);
  let taxPercentual = parseFloat(document.getElementById("percImpostos").value);
  let finalValue = document.getElementById("valorfinal");

  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  if (isNaN(factoryCost) || isNaN(distributorPercentual) || isNaN(taxPercentual)) {
    finalValue.innerHTML = "Por favor preencha todos os campos";
  } else {
    finalValue.innerHTML = formatter.format(
      factoryCost + (factoryCost * distributorPercentual) +
      (factoryCost + taxPercentual)
    );
  }
}

window.onload = () => {
  alert("\nExercício 1 \n\nSoma = " + (10 + 100));
};

showTenToOneHundread();
showNumberFiveMultiplicationTable();
showOnlyEven();
