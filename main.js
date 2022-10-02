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

function calculate (operation, args) {

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

function resolveOperation(operation) {
    let value1 = parseFloat(document.getElementById("value1").value);
    let value2 = parseFloat(document.getElementById("value2").value);
    let result = document.getElementById("ex5");
    
    if (operation === "+") {
        result.innerHTML = value1 + value2;
    } else if (operation === "-") {
        result.innerHTML = value1 - value2;
    } else if (operation === "*") {
        result.innerHTML = value1 * value2;
    } else if (operation === "/") {
        result.innerHTML = value1 / value2;
    }
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
    let distributorPerc = parseFloat(document.getElementById("percDistribuidor").value);
    let taxPerc = parseFloat(document.getElementById("percImpostos").value);
    let finalValue = document.getElementById("valorfinal");

    finalValue.innerHTML = "R$ " + (
        factoryCost + (factoryCost * distributorPerc) +
        (factoryCost + taxPerc)
    );
}

window.onload = () => {
  alert("\nExercício 1 \n\nSoma = " + (10 + 100));
};

showTenToOneHundread();
showNumberFiveMultiplicationTable();
showOnlyEven();
