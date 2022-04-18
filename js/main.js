function setup() {
  createCanvas(500, 400);

  //Audio
  somTrilha.loop()
}

function draw() {
//Display
  background(imagemDaEstrada);
  mostraPersonagem(); 
  mostraCarros()

//Movimento Personagem
  movimentaPersonagem()

//Movimento Carros
  movimentaCarros()
  voltandoPosição()

  verificarColisao()
//placar
  incluiPontos()

}
