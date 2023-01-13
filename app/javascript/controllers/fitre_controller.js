import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="fitre"
export default class extends Controller {
  static targets = ["listFiltre", "results"]

  connect() {
    console.log("filtre")
  }

  filter() {
    console.log("ca marche")
    console.log(this.listFiltreTarget)
    console.log(this.resultsTarget)
  }
}
