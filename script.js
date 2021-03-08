// function enviar() {
//     alert('O e-mail '+document.getElementById("nl").value+' foi enviado');
//   }


function enviar() {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var email = document.getElementById("nl").value

  if(email.match(mailformat)) {
alert('O e-mail '+email+' foi enviado');
document.getElementById('desafio3').style.display = 'block';
document.getElementById('desafio3').innerHTML = 'Bem-vindo, ' + email
} else {
alert('E-mail inválido');}
}