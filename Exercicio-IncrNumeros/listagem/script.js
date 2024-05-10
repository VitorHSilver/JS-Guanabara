const btn = document.querySelector('#btn');
const btnMostrar = document.querySelector('#btnFinalizar');

let opt = document.querySelector('#numInsert');
const res = document.querySelector('.res');
const n = []; // criando um array

function addNumber() {
     const number = document.querySelector('#num').value;
     let num = Number(number); // tratando apenas números

     if (number.length === 0 || num > 100 || isNaN(num)) {
          window.alert('Insira um número valido');
     } else if (n.includes(num)) {
          window.alert('Este número já está na lista');
     } else {
          let item = document.createElement('option');
          n.push(num); // acrescentando o número tratado ao array
          item.text = ` valor adicionado ${num}`;
          opt.appendChild(item);
          res.innerHTML = '';

          //limpar o valor digitado
          number.value = '';
     }
}
btn.addEventListener('click', addNumber);

function infoShow() {
     if (n.length === 0) {
          window.alert('Adicione valores antes de finalizar');
     } else {
          // Quantidade de array
          res.innerHTML = `Temos um indice composto por<span> ${n.length} números</span><br><br>`;
          // O Maior valor entre o array
          const maior = Math.max(...n);
          res.innerHTML += `Maior número é: <span> ${maior}</span>  <br><br>`;
          // O Maior valor entre o array
          const menor = Math.min(...n);
          res.innerHTML += `Maior número é: <span> ${menor}</span>  <br><br>`;
          //Somando todos os valores
          const somaDosValores = n.reduce((ac, e) => {
               return ac + e;
          });
          res.innerHTML += `Soma dos valores é:<span> ${somaDosValores}</span><br><br>`;
          //Média dos valores digitados
          var sum = 0;
          for (let i = 0; i < n.length; i++) {
               sum += n[i];
          }
          let media = sum / n.length;
          let avg = media.toFixed(2);
          res.innerHTML += `A média dos valores digitados é:<span> ${avg}</span>`;
     }
}
window.addEventListener('keydown', (e) => {
     if (e.key == 'Enter') {
          addNumber();
          document.querySelector('#num').value = '';
     }
});

btnMostrar.addEventListener('click', infoShow);
