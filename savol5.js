function randColor() {
        var rangRaqam = '0123456789ABCDEF';
        var rang = '#';
        for (var i = 0; i < 6; i++) {
          rang += rangRaqam[Math.floor(Math.random() * 16)];
        }
        return rang;
      }
      
      function orqaFon() {
        var randomRang = randColor();
        document.body.style.backgroundColor = randomRang;
        document.getElementById("rangButton").style.backgroundColor = randomRang;
        document.getElementById("rangButton").innerHTML = "Rang: " + randomRang;
      }
    