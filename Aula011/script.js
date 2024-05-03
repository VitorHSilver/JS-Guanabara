function ChecagemdeHorario() {
     const horario = document.querySelector('#horario').value;
     const valor = document.querySelector('#valor');

     if (horario <= 6 || horario <= 12) {
          valor.innerHTML = `<p> Bom dia! agora são ${horario} horas </p> `;
     } else if (horario > 12 && horario < 18) {
          valor.innerHTML = `<p>Boa tarde! agora são ${horario} horas </p>`;
     } else {
          valor.innerHTML = `<p> Boa noite! agora são ${horario} horas </p>`;
     }
}

// Pegar horario do atual e horas
var agora = new Date();
var dia = agora.getDay();
var hora = agora.getHours();

if (hora <= 6 || hora <= 12) {
     console.log(`Bom dia! agora são ${hora} horas `);
} else if (hora > 12 && hora < 18) {
     console.log(`Boa tarde! agora são ${hora} horas`);
} else {
     console.log(` Boa noite! agora são ${hora} horas`);
}
