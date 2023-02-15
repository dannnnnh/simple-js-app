const pokemonRepository = (function () {
    let pokemonList = [
        {
            name: "Bulbasaur",
            height: 7,
            types: ["grass", "water"]
        }, {
            name: "Pidgey",
            height: 0.3,
            types: ["air", "grass"]
        }, {
            name: "Poliwhirl",
            height: 1,
            types: ["ice", "steel"]
        }
    ];


    function getAll() {
        return pokemonList
    }

    function add(pokemon) {
        pokemonList.push(pokemon)
    }


    return {getAll: getAll, add: add}


})();


// For loop goes through each item in the list and prints the name and height to the DOM with spaces
// for (let i = 0; i < pokemonList.length; i++) {
//     let size = "";
//     if (pokemonList[i].height > 5) {
//         size = "Large scale pokemon!";
//     }

document.write("<h1>" + "Pokemon List" + "</h1>");

pokemonRepository.getAll().forEach(pokemon => {
    let size = "";
    if (pokemon.height > 5) {
        size = "Large scale pokemon!"
    }
    document.write("<h2>" + pokemon.name + "</h2>");
    document.write("<p>" + " Height: " + "<b>" + pokemon.height + "</b>" + " " + size + "</p>");


    // Write title, List of names, heights and extra copy if the pokemon is large scale


})
