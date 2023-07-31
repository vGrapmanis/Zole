// Choose 3 or 4 player game
    function redirectToNameInput(playerCount) {
      if (playerCount === '3') {
        window.location.href = "player_names_3.html";
      } else if (playerCount === '4') {
        window.location.href = "player_names_4.html";
      }
    }

    // Function to retrieve player names from URL parameters
    function getPlayerNames() {
      const urlParams = new URLSearchParams(window.location.search);
      const player1 = urlParams.get('player1');
      const player2 = urlParams.get('player2');
      const player3 = urlParams.get('player3');

      // Update the table cells with player names
      document.getElementById('player1Cell').innerText = player1;
      document.getElementById('player2Cell').innerText = player2;
      document.getElementById('player3Cell').innerText = player3;
    }

    // Call the function to display player names when the page loads
    window.onload = getPlayerNames;


    // Function to retrieve player names from URL parameters
    function getPlayerNames() {
      const urlParams = new URLSearchParams(window.location.search);
      const player1 = urlParams.get('player1');
      const player2 = urlParams.get('player2');
      const player3 = urlParams.get('player3');
      const player4 = urlParams.get('player4');

      // Update the table cells with player names
      document.getElementById('player1Cell').innerText = player1;
      document.getElementById('player2Cell').innerText = player2;
      document.getElementById('player3Cell').innerText = player3;
      document.getElementById('player4Cell').innerText = player4;
    }

    // Call the function to display player names when the page loads
    window.onload = getPlayerNames;

    // Scoreboard

    let player1Score = 0;
    let player2Score = 0;
    let player3Score = 0;
    let player4Score = 0;

    document.getElementById("player1Score").innerHTML = player1Score;
    document.getElementById("player2Score").innerHTML = player2Score;
    document.getElementById("player3Score").innerHTML = player3Score;
    document.getElementById("player4Score").innerHTML = player4Score;


    