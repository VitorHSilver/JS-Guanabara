var horario = new Date();
var hora = horario.getHours();
var minutos = horario.getMinutes();

const divTexto = document.querySelector('.textoHoras');
const imgDinamica = document.querySelector('.imagem');

//condições para verificação do horario
if (hora >= 6 && hora < 12) {
     divTexto.innerHTML = `<p>Bom dia! agora são <strong> ${hora} horas e ${minutos} minutos </strong </p>`;
     imgDinamica.innerHTML += `<div class="imagem"><img src="/Exercicio-IF/Dinâmico de horas/Assets/dia.jpg" alt="imagemDia" /><div>`;
     const fundo = document.querySelector('#body');
     fundo.classList.toggle('dia');
} else if (hora >= 12 && hora < 18) {
     divTexto.innerHTML = `<p>Boa tarde! agora são <strong> ${hora} horas e ${minutos} minutos </strong </p>`;
     imgDinamica.innerHTML += `<div class="imagem"><img src="/Exercicio-IF/Dinâmico de horas/Assets/tarde.jpg" alt="imagemTarde" /><div>`;
     const fundo = document.querySelector('#body');
     fundo.classList.toggle('tarde');
} else if (hora >= 18 && hora <= 23) {
     divTexto.innerHTML = `<p>Boa noite! agora são <strong> ${hora} horas e ${minutos} minutos </strong </p>`;
     divTexto.innerHTML += `<div class="imagem"><img src="/Exercicio-IF/Dinâmico de horas/Assets/noite.jpg" alt="imagemNoite" /></div>`;
     const fundo = document.querySelector('#body');
     fundo.classList.toggle('noite');
} else if (hora >= 0 && hora < 6) {
     divTexto.innerHTML = `<p>Boa madrugada! agora são <strong> ${hora} horas e ${minutos} minutos </strong </p>`;
     divTexto.innerHTML += `<div class="imagem"><img src="/Exercicio-IF/Dinâmico de horas/Assets/madrugada.jpg" alt="imagemMadrugada" /><div>`;
     const fundo = document.querySelector('#body');
     fundo.classList.toggle('madrugada');
}
