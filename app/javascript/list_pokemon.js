const results = document.querySelector("#list")

fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
  .then(response => response.json())
  .then((data) => {
    data.results.forEach((pokemon) => {

      fetch(pokemon.url)
        .then(response => response.json())
        .then((data) => {

          const listPokemon =
            `<li class="list-item">
              <img src="${data.sprites.front_default}" alt="pokemon">
              <p>${pokemon.name}</p>
            </li>`
          results.insertAdjacentHTML("beforeend", listPokemon)

    })
  })
})






  // <img src="${pokemon.sprites.front_default}" alt="">
{/* <img src="${firstG.sprites.front_default}" alt=""> */}
