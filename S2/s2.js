import Team from './team.js';

let list = [];
let pokemon = [];
// Create new team
let team1 = new Team();

function getData(){
    //get the list
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => {
        return response.json();
    }).then(data => {
        list = data.results;
        //Loop over the list to get each pokemon
        for(let element of list){
            fetch(element.url).then(response => {
                return response.json();
             }).then(data => {
                 pokemon.push(data);
             })
        }
    });
}

window.onload = function(){

    getData();
    setTimeout(buildList, 3000);

    function buildList(){
        let html = '';
        // Order the list
        pokemon.sort(function(a,b) {
            return a.id - b.id;
        });

        for(let p of pokemon){
            html += `
            <div class="pokeblock">
                <img src="${p.sprites.front_shiny}" alt="pokemon">
                <p class="name">${p.name}</p>
                <p class="types">${p.types.map((type => {
                    return ` ${type.type.name}`
                }))}</p>
                <a href="" id="${p.id}" class= "btn">Add to team</a>
            </div>`
        }
        document.getElementById('pokemon').innerHTML = html;

        //Add event listeners to all the buttons
        document.querySelectorAll('.btn').forEach(item => {
            item.addEventListener('click', event => {
                event.preventDefault();
                //Get the id of the clicked item
                let id = event.target.id;
                // Two ways of retrieving the correct pokemon data
                // 1. Make a new fetch call
                // 2. search for the pokemon in the array
                team1.roster.push(list[id-1].name);
                console.log(team1.roster);
                refreshTeam();

            });
        });
    }

    refreshTeam();

    
    
    

}

function refreshTeam(){
    //Add the team description to the page
    document.getElementById('team').innerHTML = team1.describe();
}

{/* <div class="card" style="width: 10rem; margin: 3px;">
        <img class="card-img-top" src="${p.sprites.front_default}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text">types TBD</p>
            <a href="#" id="${p.id}" class="btn btn-primary ">Add to team</a>
        </div>
    </div> */}
