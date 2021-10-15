'use strict';

const apiKey = "client_id=5UGynejyAW";
var games = [];

window.onload = function(){
    fetchData(`https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&${apiKey}`);
    
}

async function fetchData(someUrl){
    fetch(someUrl)
        .then(response => response.json())
        .then(data => {
          games = data.games;
          console.log(games);
          buildList();
        });
}

function buildList(){
  // Order the list, now its ordered on the user rating
  games.sort(function(a,b) {
      return b.average_user_rating - a.average_user_rating;
  });

  //Change the innerHTML of the page
  let html = '';
  //Make a for loop to pass all the games who are needed to be displayed
  for(let game of games){
      html += `
      <div class="game">
        <img src=${game.image_url} alt="Scythe">
        <p class="name">${game.handle}</p>
        <p class="rating">User rating: ${Math.round(game.average_user_rating * 100) / 100}</p>
        <p class="complexity">learning: ${Math.round(game.average_learning_complexity * 100) / 100}</p>
      </div>`;
  }
  document.getElementById('games').innerHTML = html;
}
