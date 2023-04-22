  let canvas_DOM = document.getElementById('canvas')
  let square = canvas_DOM.getContext("2d")

  const speed = 1;

  let X_Speed, Y_Speed = 0;
  let X_Square, Y_Square = 10;
  let Square_Size = 30;
  let Square_Amount = 20;
  let X_Apple, Y_Apple = 10;

  let Snake = [];
  tail = 5;


  const game = () => {
    square.fillStyle = "#1e3888";
    square.fillRect(0, 0, canvas_DOM.width, canvas_DOM.height);

    if(X_Square < 0) {
      X_Square = Square_Size -1;
    }
    if(X_Square > Square_Amount - 1) {
      X_Square = 0;
    }
  }





  



window.onload = game();


// COLORS => https://coolors.co/1e3888-47a8bd-f5e663-ffad69-9c3848  

