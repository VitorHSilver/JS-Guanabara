// Variavel composta
let times = ['palmeiras', 'santos', 'são paulo'];
// Acrescentando o valor no ultimo array
times.push('corinthians');

console.log(` Os times da Capital de São Paulo são: \n ${times}`);

// Contando do array
console.log(`O vetor possui ${times.length} posições`);

// Ordenando por ordem alfabetica
console.log(times.sort());

// mostrando o valor de cada array
// for (let i = 0; i < times.length; i++) {
//      console.log(`Os time de são paulo são:${times[i].toUpperCase()}`);
// }
times.forEach((e) => {
     console.log(`mostrando com forEach: `, e);
});

// Buscar um valor dentro indexOf


