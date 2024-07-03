// hej
alert('Välkommen till Miniräknaren!');

// 1. Skapa en prompt som frågar om ett valfritt tal. Spara undan i en variabel.
let num1 = prompt('Ange det första talet:');
num1 = parseFloat(num1);

// 2. Skapa en prompt till som frågar om ett annat tal. Spara i en variabel.
let num2 = prompt('Ange det andra talet:');
num2 = parseFloat(num2);

// 3. Skapa ny en tredje prompt som frågar vilket räknesätt användare vill använda.
// Det bör framgå att endast +, -, * och / är möjliga.
// Denna ska också sparas i en variabel.
let operator = prompt(
  'Vilket räknesätt vill du använda? (Ange +, -, * eller /)'
);

let calculation;

// 4. if-else-if
if (operator === '+') {
  calculation = num1 + num2;
  alert(`Resultatet av ${num1} + ${num2} är ${calculation}`);
} else if (operator === '-') {
  calculation = num1 - num2;
  alert(`Resultatet av ${num1} - ${num2} är ${calculation}`);
} else if (operator === '*') {
  calculation = num1 * num2;
  alert(`Resultatet av ${num1} * ${num2} är ${calculation}`);
} else if (operator === '/') {
  if (num2 !== 0) {
    calculation = num1 / num2;
    alert(`Resultatet av ${num1} / ${num2} är ${calculation}`);
  } else {
    alert('Error: Division med noll är inte tillåtet!');
  }
} else {
  alert('Ogiltigt räknesätt. Vänligen använd +, -, * eller /');
}

// hejdå
alert('Tack för att du använde Miniräknaren. Hej då!');
