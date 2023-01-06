import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  connect() {
    console.log("cc")
  }

  submit(event) {
    event.preventDefault()
    console.log("CC2")

    // Get the form data
    const formData = new FormData(event.target)

    fetch("/your/form/handler", {
      method: "POST",
      body: formData
    }).then(response => response.text())
    .then((data) => {
      console.log(data)
      this.listTarget.outerHTML = data;
    })
  }
}
