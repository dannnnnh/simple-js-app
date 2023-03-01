const pokemonRepository = (function () {
  const t = [],
    e = "https://pokeapi.co/api/v2/pokemon/?limit=20";
  function o(e) {
    "object" == typeof e && "name" in e && "detailsUrl" in e
      ? t.push(e)
      : console.log("add an object");
  }
  function n(t) {
    let e = $(".modal-body"),
      o = $(".modal-title");
    $(".modal-header");
    o.empty(), e.empty();
    let n = $("<h1>" + t.name + "</h1>"),
      a = $('<img class="modal-img" style="width:50%">');
    a.attr("src", t.imageUrlFront);
    let i = $('<img class="modal-img" style="width:50%">');
    i.attr("src", t.imageUrlBack);
    let l = $("<p>height : " + t.height + "</p>"),
      s = $("<p>weight : " + t.weight + "</p>"),
      p = $("<p>types : " + t.types + "</p>"),
      c = $("<p>abilities : " + t.abilities + "</p>");
    o.append(n),
      e.append(a),
      e.append(i),
      e.append(l),
      e.append(s),
      e.append(p),
      e.append(c);
  }
  return {
    add: o,
    getAll: function () {
      return t;
    },
    addListItem: function (t) {
      pokemonRepository.loadDetails(t).then(function () {
        const e = $(".row"),
          o = $(
            '<div class="card col-md-4 col-lg-3 col-sm-6" style="width:400px"></div>'
          ),
          a = $(
            '<img class="card-img-top" alt="Card image" style="width:20%" />'
          );
        a.attr("src", t.imageUrlFront);
        const i = $('<div class="card-body"></div>'),
          l = $("<h4 class='card-title' >" + t.name + "</h4>"),
          s = $(
            '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">See Profile</button>'
          );
        e.append(o),
          o.append(a),
          o.append(i),
          i.append(l),
          i.append(s),
          s.on("click", function (e) {
            var o;
            (o = t),
              pokemonRepository.loadDetails(o).then(function () {
                console.log(o), n(o);
              });
          });
      });
    },
    loadList: function () {
      return $.ajax(e)
        .then(function (t) {
          t.results.forEach(function (t) {
            const e = { name: t.name, detailsUrl: t.url };
            o(e), console.log(e);
          });
        })
        .catch(function (t) {
          console.error(t);
        });
    },
    loadDetails: function (t) {
      const e = t.detailsUrl;
      return $.ajax(e)
        .then(function (e) {
          (t.imageUrlFront = e.sprites.front_default),
            (t.imageUrlBack = e.sprites.back_default),
            (t.height = e.height),
            (t.types = []);
          for (const o = 0; o < e.types.length; o++)
            t.types.push(e.types[o].type.name);
          t.abilities = [];
          for (const o = 0; o < e.abilities.length; o++)
            t.abilities.push(e.abilities[o].ability.name);
          t.weight = e.weight;
        })
        .catch(function (t) {
          console.error(t);
        });
    },
    showModal: n,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (t) {
    pokemonRepository.addListItem(t);
  });
});
