window.onload = function(){
 
  var stage = document.getElementById('stage');
  var ctx = stage.getContext("2d");
  document.addEventListener("keydown", keyPush);
  setInterval(game, 80);

  const VELOCIDADE = 1;

  var VELOCIDADE_X = VELOCIDADE_Y = 0;
  var POSICAO_QUADRADO_X = 10;
  var POSICAO_QUADRADO_y = 10;
  var TAMANHO_DA_PECA = 30;
  var QUANTIDADEDEPECAS = 20;
  var MACAO_X=MACAO_Y=10;

  var ARRAY_SNAKE = [];
  tail = 5;

  function game(){
      POSICAO_QUADRADO_X += VELOCIDADE_X;
      POSICAO_QUADRADO_y += VELOCIDADE_Y;
      if (POSICAO_QUADRADO_X <0) {
          POSICAO_QUADRADO_X = QUANTIDADEDEPECAS-1;
      }
      if (POSICAO_QUADRADO_X > QUANTIDADEDEPECAS-1) {
          POSICAO_QUADRADO_X = 0;
      }
      if (POSICAO_QUADRADO_y < 0) {
          POSICAO_QUADRADO_y = QUANTIDADEDEPECAS-1;
      }
      if (POSICAO_QUADRADO_y > QUANTIDADEDEPECAS-1) {
          POSICAO_QUADRADO_y = 0;
      }

      ctx.fillStyle = "black";
      ctx.fillRect(0,0, stage.width, stage.height);

      ctx.fillStyle = "red";
      ctx.fillRect(MACAO_X*TAMANHO_DA_PECA, MACAO_Y*TAMANHO_DA_PECA, TAMANHO_DA_PECA,TAMANHO_DA_PECA);

      ctx.fillStyle = "gray";
      for (var i = 0; i < ARRAY_SNAKE.length; i++) {
          ctx.fillRect(ARRAY_SNAKE[i].x*TAMANHO_DA_PECA, ARRAY_SNAKE[i].y*TAMANHO_DA_PECA, TAMANHO_DA_PECA-1,TAMANHO_DA_PECA-1);
          if (ARRAY_SNAKE[i].x == POSICAO_QUADRADO_X && ARRAY_SNAKE[i].y == POSICAO_QUADRADO_y)
          {
              VELOCIDADE_X = VELOCIDADE_Y=0;
              tail =5;
          }
      }

      ARRAY_SNAKE.push({x:POSICAO_QUADRADO_X,y:POSICAO_QUADRADO_y })
      while (ARRAY_SNAKE.length > tail) {
          ARRAY_SNAKE.shift();
      }

      if (MACAO_X==POSICAO_QUADRADO_X && MACAO_Y==POSICAO_QUADRADO_y){
          tail++;
          MACAO_X = Math.floor(Math.random()*QUANTIDADEDEPECAS);
          MACAO_Y = Math.floor(Math.random()*QUANTIDADEDEPECAS);
      }

  }

  function keyPush(event){

      switch (event.keyCode) {
          case 37: // Left
              VELOCIDADE_X = -VELOCIDADE;
              VELOCIDADE_Y = 0;
              break;
          case 38: // up
              VELOCIDADE_X = 0;
              VELOCIDADE_Y = -VELOCIDADE;
              break;
          case 39: // right
              VELOCIDADE_X = VELOCIDADE;
              VELOCIDADE_Y = 0;
              break;
          case 40: // down
              VELOCIDADE_X = 0;
              VELOCIDADE_Y = VELOCIDADE;
              break;          
          default:
              
              break;
      }


  }

}




// Cria borda em cada quadrado do canvas
/*
for(var LARGURMACAO_X = 0; LARGURAX < 20; LARGURAX++) {
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