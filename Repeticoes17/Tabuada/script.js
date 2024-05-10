const btn = document.querySelector('#btn');
const btnLimpar = document.querySelector('#btnLimpar');

function GeradorTabuada() {
     let num = document.querySelector('#num').value;
     let n = Number(num);
     let tab = document.querySelector('#seltab');
     tab.innerHTML = '';
     if (num.length === 0 || isNaN(n)) {
          window.alert('Insira um número valido');
     } else {
          for (var i = 1; i <= 10; i++) {
               let item = document.createElement('option');
               let r = n * i;
               item.text = ` ${n} X ${i} = ${r}`;
               tab.appendChild(item);

               item.addEventListener('click', () => {
                    Copiar(r);
               });
          }
     }
}

btn.addEventListener('click', GeradorTabuada);

function Copiar(texto) {
     Toastify({
          text: 'Resultado copiado',
          duration: 3000,
          close: true,
          gravity: 'bottom',
          position: 'right',
          stopOnFocus: true,
          style: {
               background: 'var(--cordetexto)',
          },
          onClick: function () {
               navigator.clipboard.writeText(texto);
          },
     }).showToast();
}

function Limpar() {
     document.querySelector('#num').value = '';

     const options = document.getElementById('seltab').options;
     while (options.length > 0) {
          options[0].remove();
     }
}

btnLimpar.addEventListener('click', Limpar);

window.addEventListener('keydown', (e) => {
     if (e.key == 'Enter') {
          GeradorTabuada();
     }
});

let cont = 0;
function Contador() {
     cont++;
     if (cont > 2) {
          aviso.innerHTML = ''; // para não duplicar a frase "resultado copiado"
     }
}

btn.addEventListener('click', Contador);
