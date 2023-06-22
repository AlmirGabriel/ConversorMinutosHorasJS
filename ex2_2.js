function converterDuracao() {
  //cria referencia aos elementos da pagina
  var inTitulo = document.getElementById("inTitulo")
  var inDuracao = document.getElementById("inDuração")
  var outTitulo = document.getElementById("outTitulo")
  var outTitulo = document.getElementById("outResposta") //obtém conteudos dos campos de entrada
  var titulo = inTitulo.value
  var duracao = Number(inDuracao.value) //arredonda para baixo o resultado da divisao
  var horas = Math.floor(duracao / 60) //obtem o resto da divisao entre os numeros
  var minutos = duracao % 60 //altera o conteudo dos paragrafos de resposta
  outTitulo.textContent = titulo
  outResposta.textContent = horas + " hora(s) e " + minutos + " minuto(s)"
}
//cria uma referencia ao elemento btConverter (botão)
var btConverter = document.getElementById("btConverter") //registra um evento associado ao botão, para carregar uma função
btConverter.addEventListener("click", converterDuracao)
