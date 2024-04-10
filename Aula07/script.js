const botao = document.querySelector('button');

function Calcular() {
     var n1 = document.getElementById('n1');
     var n2 = document.querySelector('#n2');
     var valor1 = Number(n1.value);
     var valor2 = Number(n2.value);
     var resultado = valor1 + valor2;
     const escreverResultado = document.querySelector('p');
     escreverResultado.innerText = `O Resultado de ${valor1} + ${valor2} é igual a ${resultado}`;
}

botao.addEventListener('click', Calcular);
