// Altera a url do background principal do site no primeiro dia do mês
function primeiro_dia() {  
    var data_atual = new Date();
    var dia = data_atual.getDate();

    var background = document.getElementsByClassName("backgroundprincipal")[0];

    if (dia == 1) {
      background.style.backgroundImage = "url('images/background4.jpg')";
    }
}

// Cálculo de dias até a E3 2021
function evento() {
  var data_atual = new Date();
  var data_evento = new Date(2021, 5, 15);              

  var tempo_dif = data_evento.getTime() - data_atual.getTime();
  var qtd_dias = Math.ceil(tempo_dif / (1000 * 3600 * 24));

  var data = new Date();

  var dia = data.getDate();
  var mes = data.getMonth();
  var ano = data.getFullYear();

  if (dia >= 15 && dia <= 17 && mes == 5 && ano == 2021) {
    document.getElementsByClassName("resultado")[0].innerHTML = "A E3 2021 está acontecendo!";
  } else if(qtd_dias > 1) {   
    document.getElementsByClassName("resultado")[0].innerHTML = qtd_dias + " dias";
  } else if (qtd_dias == 1) {
    document.getElementsByClassName("resultado")[0].innerHTML = qtd_dias + " dia";
  } else {
    document.getElementsByClassName("resultado")[0].innerHTML = "A E3 2021 acabou!";
  }
}

// Função do horário no site
setInterval(atualiza, 1000);
function atualiza() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementsByClassName("hora")[0].innerHTML = "<i class='material-icons' style='font-size:16px;'>schedule</i> " + t;
}
  
// Chamada das funções após o carregamento dos elementos HTML
window.onload = function() {
  primeiro_dia();
  evento();
};
