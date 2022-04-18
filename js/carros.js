function mostraCarros() {
    for (let i = 0; i < carro.length; ++i){
        image(carro[i], xCarros[i], yCarros[i], carrosComprimentosAltura, carrosComprimentosAltura);
    }
  }

//Propriedades Carros
    let xCarros = [555, -10, 555, -10, 555, -10]
    let yCarros = [37, 95, 147, 209, 262, 318]
    let velocidadeCarro = [8.8, 7, 5, 3.5, 7.9, 6]

    let carrosComprimentosAltura = 42
  
  function movimentaCarros(){
    for(let i = 0; i < xCarros.length; ++i){
        if (i % 2) {
            xCarros[i] += velocidadeCarro[i] 
        }  else {
            xCarros[i] -= velocidadeCarro[i]
        } 
    }
  }

  function voltandoPosição() {
    for(let i = 0; i < xCarros.length; ++i){

         if (i % 2 && xCarros[i] > 600) {
            xCarros[i] = -10
        }  

         if (i % 2 == false  && xCarros[i] < -10){
            xCarros[i] = 555
        } 
    }
  }
