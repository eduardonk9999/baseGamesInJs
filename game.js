window.onload = function() {
  var tela = document.getElementById('tela')
  var quadrado = tela.getContext("2d")

  
  
  

  for(var LARGURAX = 0; LARGURAX < 20; LARGURAX++) {
    console.log(LARGURAX)
    
    for(var ALTURAY = 0; ALTURAY < 20; ALTURAY++) {
      quadrado.fillStyle = "gray"
      quadrado.fillRect(ALTURAY * 20, LARGURAX * 20, tela.width, tela.height)
      quadrado.strokeStyle = "black";
      quadrado.strokeRect(ALTURAY * 20, LARGURAX * 20, tela.width, tela.height)

      
      
    
    }
  }

  console.log('teste',)
} 