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

// For loop goes through each item in the list and prints the name and height to the DOM with spaces
for (let i = 0; i < pokemonList.length; i++) {
    let size = "";
    if (pokemonList[i].height > 5) {
        size = "Large scale pokemon!";
    }

    // Write title, List of names, heights and extra copy if the pokemon is large scale
    document.write("<h1>" + "Pokemon List" + "</h1>");
    document.write("<h2>" + pokemonList[i].name + "</h2>");
    document.write("<p>" + " Height: " + "<b>" + pokemonList[i].height + "</b>" + " " + size + "</p>");
}
