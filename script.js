// function insert(num) {
//     var numero = document.getElementById('resultado').innerHTML;
//     document.getElementById('resultado').innerHTML = numero + num;
// }

// function clean() {
//     document.getElementById('resultado').innerHTML = "";
// }

// function back(){
//     var resultado = document.getElementById('resultado').innerHTML;
//     document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
// }

// function calcular (){
//     var resultado = document.getElementById('resultado').innerHTML;
//     if(resultado)
//     {
//         document.getElementById('resultado').innerHTML = eval(resultado);
//     }
//     else{
//         document.getElementById('resultado').innerHTML = "Digite um valor...";
//     }
// }

// função para adicionar os números e operações no campo de resultado da calculadora
function insert(value) {
    var resultado = document.getElementById("resultado");
    resultado.innerText += value;
}

// função para limpar o campo de resultado da calculadora.
function clean() {
    var resultado = document.getElementById("resultado");
    resultado.innerText = "";
}

// função para apagar o último caractere do campo de resultado da calculadora.
function back() {
    var resultado = document.getElementById("resultado");
    resultado.innerText = resultado.innerText.slice(0, -1);
}

// função para realizar o cálculo da expressão matemática no campo de resultado da calculadora.
function calcular() {
    var resultado = document.getElementById("resultado");
    var expressao = resultado.innerText;

    if (expressao === "") {
        alert("Por favor, digite uma expressão antes de calcular.");
        return;
    }

    const calcularResultado = new Function(`return ${expressao}`);
    const resultadoFinal = calcularResultado();
    resultado.innerText = resultadoFinal;
}
