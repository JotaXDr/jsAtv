var peso = parseFloat(prompt("Digite o peso em quilogramas:"));
var altura = parseFloat(prompt("Digite a altura em metros:"));

var imc = peso / (altura * altura);

alert("O seu IMC é: " + imc);
