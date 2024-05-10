// Evento com resposta do usuário e mostrando

const btn = document.querySelector('#btn');
function CheckPar() {
     const valor = document.querySelector('#num').value;
     const res = document.querySelector('.res');
     let v = Number(valor);
     if (v % 2 == 0) {
          return (res.innerHTML = `<p>Seu número ${v} é par</p> `);
     } else {
          return (res.innerHTML = `<p>Seu número ${v} é impar</p>`);
     }
}

btn.addEventListener('click', CheckPar);

// Aqui mostrando sem necessidade de interação
function parimp(n) {
     return n % 2 == 0 ? console.log(`${n} é par`) : console.log(`${n} é impar`);
}

parimp('95');

/* posso colocar uma function na variavel
 podendo criar número elevado a ele mesmo
*/

n = (x) => {
     return x * x;
};
console.log(n(5));
