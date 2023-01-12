import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="pokemons"
export default class extends Controller {
  static targets = ["form", "formInput", "results"]

  connect() {

  }

  fetchPokemons(query) {
    const url = `${this.formTarget.action}?query=${this.formInputTarget.value}`
        fetch(url, { headers: { 'Accept': 'text/plain' } })
        .then(response => response.json())
        .then(data => this.insertPokemons(data))
      }

      insertPokemons(data) {
          data.Search.forEach((result) => {
            const pokemonTag = `<div class="list-item">
            <%= link_to pokemon_path(pokemon), class:"list-name" do %>
              <%= image_tag("#{pokemon.sprites}") %>
              <div class="list-description">
                <p class="list-name"><%=pokemon.name%></p>
                <p class="list-order">No.<%=pokemon.order%></p>
              </div>`
            this.resultsTarget.insertAdjacentHTML("beforeend", pokemonTag)
          })
        }

  search(event) {
    event.preventDefault();

    console.log(this.formInputTarget.value)

    this.fetchPokemons(this.formImputTarget.value)
  }

}








// fetchMovies(query) {
//   fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
//     .then(response => response.json())
//     .then(data => this.insertMovies(data))
// }

// insertMovies(data) {
//   data.Search.forEach((result) => {
//     const movieTag = `<li class="list-group-item border-0">
//       <img src="${result.Poster}" alt="" width="100">
//     </li>`
//     this.resultsTarget.insertAdjacentHTML("beforeend", movieTag)
//   })
// }

// search(event) {
//   event.preventDefault()
//   this.resultsTarget.innerHTML = ""
//   this.fetchMovies(this.inputTarget.value)
// }
