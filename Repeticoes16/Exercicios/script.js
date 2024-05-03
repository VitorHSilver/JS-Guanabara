const btn = document.querySelector('#btn');
const res = document.querySelector('.res');

res.innerHTML = `<p><strong>Preparando a contagem...</strong></p>`;

function Contador() {
     let ini = document.getElementById('ini').value;
     let fim = document.getElementById('fim').value;
     let pas = document.getElementById('pas').value;

     // validação se o valor dos inputs é igual a 0 ou vazio
     if (ini.length == 0 || fim.length == 0 || pas.length == 0) {
          window.alert('digite um valor:');
     }

     // pega os valores dos inputs e trata apenas para número
     let i = Number(ini);
     let f = Number(fim);
     let p = Number(pas);

     // Encerra a execução da função se o passo não for válido
     if (p <= 0) {
          window.alert('O passo deve ser um número positivo.');
          return;
     }
     // o valor do indice é o ini(i) e se indice for menor que fim, acaba senão indice soma com p(passo) a cada iteração
     for (var indice = i; indice <= f; indice += p) {
          res.innerHTML += ` ${indice}`;
     }
}

// aqui coloco EventListener para o btn quando houver o click aciona a função
btn.addEventListener('click', Contador);

// function recarregarPagina() {
//  document.location.reload(); 
// }


let contarClick = 0;

// toda vez que o botao for acionado ele ira abrir uma contagem
function handleClique() {
     contarClick++;

     if (contarClick == 2) {
          document.location.reload(); //regarregar pagina
     }
}
btn.addEventListener('click', handleClique);
