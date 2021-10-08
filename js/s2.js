let list = [];
let pokemon = [];


function pokemonFetch() {
    
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => {
            list = data.results;
            list.forEach(poke => {
                fetch(poke.url)
                    .then(response => response.json())
                    .then(data => {
                        pokemon.push(data);
                    });
            });
        });
}


function showPokemon(){
    var pokeContent = "";
    for(let poke in pokemon){
        pokeContent +=
            `<div class="pokeblock">
                //<img src="${poke.sprites}" alt="pokemon">
                <p class="name">${poke.forms}</p>
                <p class="number">1</p>
                <button id="nr1">Add to team</button>
            </div>`;
            // console.log(poke.sprites.front_default);
            document.getElementById("pokemon").innerHTML= pokeContent;
            console.log(poke.sprites);
    };
    

    console.log(pokemon);
}

pokemonFetch();

const interval = setInterval(function() {
    showPokemon();
    // this is executed every 3 seconds
}, 3000);