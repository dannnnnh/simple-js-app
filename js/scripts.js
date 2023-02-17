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


    function addListItem(pokemon) {
        let pokemonContainer = document.querySelector("ul.pokemon-list");
        let listItem = document.createElement("li");
        let button = document.createElement("button");

        button.innerText = pokemon.name;
        button.classList.add("btn");

        button.addEventListener('click', function (event) {
            console.log(pokemon);

        });

        listItem.appendChild(button);
        pokemonContainer.appendChild(listItem);
    }

    return {getAll: getAll, add: add, addListItem: addListItem}

})();


pokemonRepository.getAll().forEach(pokemon => {
    pokemonRepository.addListItem(pokemon);
})


// For loop goes through each item in the list and prints the name and height to the DOM with spaces
// for (let i = 0; i < pokemonList.length; i++) {
//     let size = "";
//     if (pokemonList[i].height > 5) {
//         size = "Large scale pokemon!";
//     }
