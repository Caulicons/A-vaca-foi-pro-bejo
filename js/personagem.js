function mostraPersonagem() {
    image(personagem, xPersonagem, yPersonagem, 30, 30);
  }


//Propriedades Personagem
let xPersonagem = 100;
let yPersonagem = 366;

let pontosPersonagem1 = 0;

function movimentaPersonagem() {
  if (keyIsDown(UP_ARROW)){
    yPersonagem -= 7
  }

  if (yPersonagem < -5){
    yPersonagem = 366
    pontosPersonagem1 += 1
    somPonto.play()
  }

  if (keyIsDown(DOWN_ARROW) && yPersonagem < 366){
    yPersonagem += 7
  }

  if (keyIsDown(RIGHT_ARROW) && xPersonagem < 470){
    xPersonagem += 7
  }
  
  if (keyIsDown(LEFT_ARROW) && xPersonagem > 8){
    xPersonagem -= 7
  }
}


//Verificando Colisão 
    let colidiu = false
function verificarColisao() {
    for(let i = 0; i < carro.length ; i = i + 1){
        colidiu = collideRectCircle(xCarros[i], yCarros[i], 45, 45, xPersonagem, yPersonagem, 5)
        if (colidiu) {
            yPersonagem = 366;
            pontosPersonagem1 = 0;
            somColisao.play()
    } 
 }
}

function incluiPontos() {
    textSize(25);
    textAlign(CENTER);
    text(pontosPersonagem1, width / 3, 27);
    fill(color(255, 165, 60));
}

