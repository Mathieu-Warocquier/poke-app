import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="pokemons"
export default class extends Controller {
  static targets = ["form", "formInput", "results"]

  connect() {
  }

  search(event) {
    event.preventDefault();
    console.log(this.resultsTarget)


    // this.resultsTarget.innerHTML = ""
    // console.log(formImputTarget.value);

    // this.fetchPokemons(this.formImputTarget.value)
  }

}
