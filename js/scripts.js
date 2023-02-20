const pokemonRepository = (function() {
    let pokemonList = [];
  
    function add(pokemon) {
      pokemonList.push(pokemon);
    }
  
    function getAll() {
      return pokemonList;
    }
  
    function addListItem(pokemon) {
      const pokemonList = document.querySelector('.pokemon-list');
      const listItem = document.createElement('li');
      const button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('btn');
      listItem.appendChild(button);
      pokemonList.appendChild(listItem);
      button.addEventListener('click', function(event) {
        showDetails(pokemon);
      });
    }
  
    function loadList() {
      return fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          json.results.forEach(function(item) {
            const pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
        })
        .catch(function(e) {
          console.error(e);
        });
    }
  
    function loadDetails(item) {
      const url = item.detailsUrl;
      return fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(details) {
          // Add details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types.map(function(type) {
            return type.type.name;
          });
        })
        .catch(function(e) {
          console.error(e);
        });
    }
  
    function showDetails(item) {
      loadDetails(item).then(function() {
        console.log(item);
      });
    }
  
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails
    };
  })();
  
  pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  });
  