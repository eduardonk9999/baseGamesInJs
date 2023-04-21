window.onload = function(){
 
  var stage = document.getElementById('stage');
  var ctx = stage.getContext("2d");
  document.addEventListener("keydown", keyPush);
  setInterval(game, 80);

  const vel = 1;

  var VELOCIDADE_X = VELOCIDADE_Y = 0;
  var POSICAO_QUADRADO_X = 10;
  var py = 15;
  var tp = 30;
  var QUANTIDADEDEPECAS = 20;
  var ax=ay=15;

  var trail = [];
  tail = 5;

  function game(){
      POSICAO_QUADRADO_X += VELOCIDADE_X;
      py += VELOCIDADE_Y;
      if (POSICAO_QUADRADO_X <0) {
          POSICAO_QUADRADO_X = QUANTIDADEDEPECAS-1;
      }
      if (POSICAO_QUADRADO_X > QUANTIDADEDEPECAS-1) {
          POSICAO_QUADRADO_X = 0;
      }
      if (py < 0) {
          py = QUANTIDADEDEPECAS-1;
      }
      if (py > QUANTIDADEDEPECAS-1) {
          py = 0;
      }

      ctx.fillStyle = "black";
      ctx.fillRect(0,0, stage.width, stage.height);

      ctx.fillStyle = "red";
      ctx.fillRect(ax*tp, ay*tp, tp,tp);

      ctx.fillStyle = "gray";
      for (var i = 0; i < trail.length; i++) {
          ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1,tp-1);
          if (trail[i].x == POSICAO_QUADRADO_X && trail[i].y == py)
          {
              VELOCIDADE_X = VELOCIDADE_Y=0;
              tail =5;
          }
      }

      trail.push({x:POSICAO_QUADRADO_X,y:py })
      while (trail.length > tail) {
          trail.shift();
      }

      if (ax==POSICAO_QUADRADO_X && ay==py){
          tail++;
          ax = Math.floor(Math.random()*QUANTIDADEDEPECAS);
          ay = Math.floor(Math.random()*QUANTIDADEDEPECAS);
      }

  }

  function keyPush(event){

      switch (event.keyCode) {
          case 37: // Left
              VELOCIDADE_X = -vel;
              VELOCIDADE_Y = 0;
              break;
          case 38: // up
              VELOCIDADE_X = 0;
              VELOCIDADE_Y = -vel;
              break;
          case 39: // right
              VELOCIDADE_X = vel;
              VELOCIDADE_Y = 0;
              break;
          case 40: // down
              VELOCIDADE_X = 0;
              VELOCIDADE_Y = vel;
              break;          
          default:
              
              break;
      }


  }

}




// Cria borda em cada quadrado do canvas
/*
for(var LARGURAX = 0; LARGURAX < 20; LARGURAX++) {
  for(var ALTURAY = 0; ALTURAY < 20; ALTURAY++) {
    quadrado.fillStyle = "gray"
    quadrado.fillRect(ALTURAY * 20, LARGURAX * 20, tela.width, tela.height)
    quadrado.strokeStyle = "black";
    quadrado.strokeRect(ALTURAY * 20, LARGURAX * 20, tela.width, tela.height)

    //quadrado.font = "16px Arial"
    //quadrado.fillStyle = "white"
    //quadrado.fillText(`${[ALTURAY]}`, ALTURAY * 20,  LARGURAX * 20);
  }
}*/