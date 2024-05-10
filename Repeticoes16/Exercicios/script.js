const btn = document.querySelector('#btn');

function Contar() {
     let inicio = document.querySelector('#ini').value;
     let valorFinal = document.getElementById('fim').value;
     let passos = document.getElementById('pas').value;
     let res = document.querySelector('.res');

     console.log(inicio.length);
     if (inicio.length === 0 || valorFinal.length === 0 || passos.length === 0) {
          res.innerHTML = `Impossivel iniciar a contagem!`;
     } else {
          res.innerHTML = `Contando: <br> `;
          let i = Number(inicio);
          let f = Number(valorFinal);
          let p = Number(passos);
          if (p <= 0) {
               window.alert('Passo invalido, favor inserir um valor válido');
          }
          if (i < f) {
               // Contagem Crescente
               for (let c = i; c <= f; c += p) {
                    res.innerHTML += `${c} \n`;
               }
          } else {
               // Contagem Regressiva
               for (let c = i; c >= f; c -= p) {
                    res.innerHTML += `${c} \n`;
               }
          }
     }
}
// aqui coloco EventListener para o btn quando houver o click aciona a função
btn.addEventListener('click', Contar)