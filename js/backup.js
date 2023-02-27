function addListItem(pokemon) {
  const listElement = document.querySelector(".pokemon-list");
  const listItem = document.createElement("li");
  const button = document.createElement("button");
  button.setAttribute("data-toggle", "modal");
  button.setAttribute("data-target", "#exampleModal");
  button.innerText = pokemon.name;
  button.classList.add("btn");
  listItem.appendChild(button);
  listElement.appendChild(listItem);
  button.addEventListener("click", function (event) {
    showDetails(pokemon);
  });
}
