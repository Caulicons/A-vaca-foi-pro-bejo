
//imagens
let imagemDaEstrada;
let personagem; 
let carro = []

//Sons 
let somTrilha;
let somColisao;
let somPonto;

function preload(){
  imagemDaEstrada = loadImage("./assets/img's/estrada.png")
  personagem = loadImage("./assets/img's/ator-1.png") 
  carro[0] = loadImage("./assets/img's/carro-1.png")
  carro[1] = loadImage("./assets/img's/carro-2.png")
  carro[2] = loadImage("./assets/img's/carro-3.png")
  carro[3] = loadImage("./assets/img's/carro-1.png")
  carro[4] = loadImage("./assets/img's/carro-2.png")
  carro[5] = loadImage("./assets/img's/carro-3.png")

  somTrilha = loadSound("./assets/sons/trilha.mp3")
  somColisao = loadSound("./assets/sons/colidiu.mp3")
  somPonto = loadSound("./assets/sons/pontos.wav")
}

