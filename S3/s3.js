const apiKey = "apikey=d68de918&";
var movieTitle = "";
window.onload = function(){
    
}

async function fetchData(someUrl){
    fetch(someUrl)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
}

const form = document.getElementById("searchform");function initfields(){
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let inputTitle = document.getElementById("inputTitle").value;
        console.log(inputTitle);
        fetchMovies(inputTitle);
    })
}


fetchData(`https://www.omdbapi.com/?${apiKey}t=${movieTitle}&`);