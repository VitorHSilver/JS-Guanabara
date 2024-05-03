const botao = document.querySelector('#btn');

function Verificador() {
     const data = new Date();
     const ano = data.getFullYear();

     const anoPessoa = document.querySelector('#idade').value;
     const sexoPessoa = document.querySelector('input[name=sexo]:checked');
     const sexo = sexoPessoa.value; // tratei o resultado
     const idade = ano - anoPessoa;

     const texto = document.querySelector('#texto');
     const img = document.querySelector('.imagem');

     if (anoPessoa.length == 0 || anoPessoa > ano) {
          window.alert('Digite um valor válido para o ano');
     } else if (sexo === 'masculino' && idade <= 3) {
          texto.innerHTML = `<p>Detectamos ${sexo.charAt(0).toUpperCase() + sexo.slice(1)} com ${idade} anos</p>`;
          img.innerHTML = `<div class="imagem"><img src="/Exercicio-IF/Idade/assets/baby.jpg" alt="baby-blackAndWhite" /></div>`;
     } else if (sexo === 'feminino' && idade <= 3) {
          texto.innerHTML = `<p>Detectamos ${sexo.charAt(0).toUpperCase() + sexo.slice(1)} com ${idade} anos</p>`;
          img.innerHTML = `<div class="imagem"><img src="/Exercicio-IF/Idade/assets/baby.jpg" alt="baby-blackAndWhite" /></div>`;
     } else if (sexo === 'masculino' && idade < 18) {
          texto.innerHTML`<p>Detectamos ${sexo.charAt(0).toUpperCase() + sexo.slice(1)} com ${idade} anos</p>`;
          img.innerHTML = `<div class="imagem"><img src="/Exercicio-IF/Idade/assets/boychildren.jpg" alt="boy-blackAndWhite" /></div>`;
     } else if (sexo === 'feminino' && idade < 18) {
          texto.innerHTML = `<p>Detectamos ${sexo.charAt(0).toUpperCase() + sexo.slice(1)} com ${idade} anos</p>`;
          img.innerHTML = `<div class="imagem"><img src="/Exercicio-IF/Idade/assets/girlchildren.jpg" alt="girl-blackAndWhite" /></div>`;
     } else if (sexo === 'masculino' && idade <= 60) {
          texto.innerHTML = `<p>Detectamos ${sexo.charAt(0).toUpperCase() + sexo.slice(1)} com ${idade} anos</p>`;
          img.innerHTML = `<div class="imagem"><img src="/Exercicio-IF/Idade/assets/man.jpg" alt="man-blackAndWhite" /></div>`;
     } else if (sexo === 'feminino' && idade <= 60) {
          texto.innerHTML = `<p>Detectamos ${sexo.charAt(0).toUpperCase() + sexo.slice(1)} com ${idade} anos</p>`;
          img.innerHTML = `<div class="imagem"><img src="/Exercicio-IF/Idade/assets/woman.jpg" alt="woman-blackAndWhite" /></div>`;
     } else if (sexo === 'feminino' && idade > 60) {
          texto.innerHTML = `<p>Detectamos ${sexo.charAt(0).toUpperCase() + sexo.slice(1)} com ${idade} anos</p>`;
          img.innerHTML = `<div class="imagem"><img src="/Exercicio-Idade/assets/oldwoman.jpg" alt="oldwoman-blackAndWhite" /></div>`;
     } else if (sexo === 'masculino' && idade > 60) {
          texto.innerHTML = `<p>Detectamos ${sexo.charAt(0).toUpperCase() + sexo.slice(1)} com ${idade} anos</p>`;
          img.innerHTML = `<div class="imagem"><img src="/Exercicio-Idade/assets/oldman.jpg" alt="oldman-blackAndWhite" /></div>`;
     }
}
botao.addEventListener('click', Verificador);
