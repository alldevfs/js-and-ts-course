const campo = document.querySelector('.campo');
const data = new Date();
campo.innerHTML = dataHora();

function dataHora() {
  const dia = data.getDate();
  const diaSemana = getDiaSemana(data.getDay());
  const mes = getMesAno(data.getMonth());
  const ano = data.getFullYear();
  const hora = zeroLeftHorario(data.getHours());
  const minutos = zeroLeftHorario(data.getMinutes());

  return `<p>${diaSemana}, ${dia} de ${mes} de ${ano} - ${hora}:${minutos}.</p>`;
}

function zeroLeftHorario(num) {
  return num >= 10 ? num : `0${num}`;
}

function getDiaSemana(dia) {
  diaSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira',
    'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
  return diaSemana[dia];

  // switch (dia) {
  //   case 0:
  //     diaSemana = 'Domingo';
  //     return diaSemana;
  //   case 1:
  //     diaSemana = 'Segunda-Feira';
  //     return diaSemana;
  //   case 2:
  //     diaSemana = 'Terça-Feira';
  //     return diaSemana;
  //   case 3:
  //     diaSemana = 'Quarta-Feira';
  //     return diaSemana;
  //   case 4:
  //     diaSemana = 'Quinta-Feira';
  //     return diaSemana;
  //   case 5:
  //     diaSemana = 'Sexta-Feira';
  //     return diaSemana;
  //   case 6:
  //     diaSemana = 'Sábado';
  //     return diaSemana;
  //   default:
  //     break;
  // }
}

function getMesAno(mes) {
  mesAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
    'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return mesAno[mes];

  // switch (mes) {
  //   case 0:
  //     mesAno = 'Janeiro';
  //     return mesAno;
  //   case 1:
  //     mesAno = 'Fevereiro';
  //     return mesAno;
  //   case 2:
  //     mesAno = 'Março';
  //     return mesAno;
  //   case 3:
  //     mesAno = 'Abril';
  //     return mesAno;
  //   case 4:
  //     mesAno = 'Maio';
  //     return mesAno;
  //   case 5:
  //     mesAno = 'Junho';
  //     return mesAno;
  //   case 6:
  //     mesAno = 'Julho';
  //     return mesAno;
  //   case 7:
  //     mesAno = 'Agosto';
  //     return mesAno;
  //   case 8:
  //     mesAno = 'Setembro';
  //     return mesAno;
  //   case 9:
  //     mesAno = 'Outubro';
  //     return mesAno;
  //   case 10:
  //     mesAno = 'Novembro';
  //     return mesAno;
  //   case 11:
  //     mesAno = 'Dezembro';
  //     return mesAno;
  //   default:
  //     break;
  // }
}

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
const h2 = document.querySelector('.fild');
h2.innerHTML = data.toLocaleDateString('pt-BR', options);