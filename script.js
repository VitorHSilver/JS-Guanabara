var n1 = 1545.5;

// Aredondar o número
n1 = n1.toFixed(2);

// para trocar virgula por ponto
n1.toFixed(2).replace('.', ',');

// toLaocaleString() é uma função que formata o número de acordo com a localidade
const valor = n1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
console.log(valor);
