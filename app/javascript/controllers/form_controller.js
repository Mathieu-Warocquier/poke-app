import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  static targets = ["formDiv", "formInput", "results"]

  connect() {

  }

  search(event) {
    event.preventDefault();
    console.log(this.formInputTarget)
  }

}
