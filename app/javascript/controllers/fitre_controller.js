import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="fitre"
export default class extends Controller {
  static targets = ["listFiltre", "results", "all", "plante", "feu", "eau", "insecte", "normal", "poison", "electrique"]

  connect() {
    console.log("filtre")
  }

  plante() {
    this.allTarget.classList.add("d-none")
    this.feuTarget.classList.add("d-none")
    this.eauTarget.classList.add("d-none")
    this.insecteTarget.classList.add("d-none")
    this.normalTarget.classList.add("d-none")
    this.poisonTarget.classList.add("d-none")
    this.electriqueTarget.classList.add("d-none")
    this.planteTarget.classList.remove("d-none")
    this.planteTarget.classList.remove("is-active")
  }

  feu() {
    this.allTarget.classList.add("d-none")
    this.planteTarget.classList.add("d-none")
    this.eauTarget.classList.add("d-none")
    this.insecteTarget.classList.add("d-none")
    this.normalTarget.classList.add("d-none")
    this.poisonTarget.classList.add("d-none")
    this.electriqueTarget.classList.add("d-none")
    this.feuTarget.classList.remove("d-none")
    this.feuTarget.classList.remove("is-active")
  }

  eau() {
    this.allTarget.classList.add("d-none")
    this.planteTarget.classList.add("d-none")
    this.feuTarget.classList.add("d-none")
    this.insecteTarget.classList.add("d-none")
    this.normalTarget.classList.add("d-none")
    this.poisonTarget.classList.add("d-none")
    this.electriqueTarget.classList.add("d-none")
    this.eauTarget.classList.remove("d-none")
    this.eauTarget.classList.remove("is-active")
  }

  insecte() {
    this.allTarget.classList.add("d-none")
    this.planteTarget.classList.add("d-none")
    this.feuTarget.classList.add("d-none")
    this.eauTarget.classList.add("d-none")
    this.normalTarget.classList.add("d-none")
    this.poisonTarget.classList.add("d-none")
    this.electriqueTarget.classList.add("d-none")
    this.insecteTarget.classList.remove("d-none")
    this.insecteTarget.classList.remove("is-active")
  }

  normal () {
    this.allTarget.classList.add("d-none")
    this.planteTarget.classList.add("d-none")
    this.feuTarget.classList.add("d-none")
    this.eauTarget.classList.add("d-none")
    this.insecteTarget.classList.add("d-none")
    this.poisonTarget.classList.add("d-none")
    this.electriqueTarget.classList.add("d-none")
    this.normalTarget.classList.remove("d-none")
    this.normalTarget.classList.remove("is-active")
  }

  poison() {
    this.allTarget.classList.add("d-none")
    this.planteTarget.classList.add("d-none")
    this.feuTarget.classList.add("d-none")
    this.eauTarget.classList.add("d-none")
    this.insecteTarget.classList.add("d-none")
    this.normalTarget.classList.add("d-none")
    this.electriqueTarget.classList.add("d-none")
    this.poisonTarget.classList.remove("d-none")
    this.poisonTarget.classList.remove("is-active")
  }

  electrique() {
    this.allTarget.classList.add("d-none")
    this.planteTarget.classList.add("d-none")
    this.feuTarget.classList.add("d-none")
    this.eauTarget.classList.add("d-none")
    this.insecteTarget.classList.add("d-none")
    this.normalTarget.classList.add("d-none")
    this.poisonTarget.classList.add("d-none")
    this.electriqueTarget.classList.remove("d-none")
    this.electriqueTarget.classList.remove("is-active")
  }
}
