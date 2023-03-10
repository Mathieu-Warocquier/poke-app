import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="fitre"
export default class extends Controller {
  static targets = ["listFiltre", "results", "all", "plante", "feu", "eau", "insecte", "normal", "poison", "electrique", "sol", "fee", "combat", "psy", "spectre", "glace"]

  connect() {

  }

  all() {
    this.planteTarget.classList.add("d-none")
    this.feuTarget.classList.add("d-none")
    this.eauTarget.classList.add("d-none")
    this.insecteTarget.classList.add("d-none")
    this.normalTarget.classList.add("d-none")
    this.poisonTarget.classList.add("d-none")
    this.electriqueTarget.classList.add("d-none")
    this.solTarget.classList.add("d-none")
    this.feeTarget.classList.add("d-none")
    this.combatTarget.classList.add("d-none")
    this.psyTarget.classList.add("d-none")
    this.spectreTarget.classList.add("d-none")
    this.glaceTarget.classList.add("d-none")
    this.allTarget.classList.remove("d-none")
    this.allTarget.classList.remove("is-active")
    console.log(this.allTarget)
    console.log(this.feeTarget)
  }

  plante() {
    this.allTarget.classList.add("d-none")
    this.feuTarget.classList.add("d-none")
    this.eauTarget.classList.add("d-none")
    this.insecteTarget.classList.add("d-none")
    this.normalTarget.classList.add("d-none")
    this.poisonTarget.classList.add("d-none")
    this.electriqueTarget.classList.add("d-none")
    this.solTarget.classList.add("d-none")
    this.feeTarget.classList.add("d-none")
    this.combatTarget.classList.add("d-none")
    this.psyTarget.classList.add("d-none")
    this.spectreTarget.classList.add("d-none")
    this.glaceTarget.classList.add("d-none")
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
    this.solTarget.classList.add("d-none")
    this.feeTarget.classList.add("d-none")
    this.combatTarget.classList.add("d-none")
    this.psyTarget.classList.add("d-none")
    this.spectreTarget.classList.add("d-none")
    this.glaceTarget.classList.add("d-none")
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
    this.solTarget.classList.add("d-none")
    this.feeTarget.classList.add("d-none")
    this.combatTarget.classList.add("d-none")
    this.psyTarget.classList.add("d-none")
    this.spectreTarget.classList.add("d-none")
    this.glaceTarget.classList.add("d-none")
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
    this.solTarget.classList.add("d-none")
    this.feeTarget.classList.add("d-none")
    this.combatTarget.classList.add("d-none")
    this.psyTarget.classList.add("d-none")
    this.spectreTarget.classList.add("d-none")
    this.glaceTarget.classList.add("d-none")
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
    this.solTarget.classList.add("d-none")
    this.feeTarget.classList.add("d-none")
    this.combatTarget.classList.add("d-none")
    this.psyTarget.classList.add("d-none")
    this.spectreTarget.classList.add("d-none")
    this.glaceTarget.classList.add("d-none")
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
    this.solTarget.classList.add("d-none")
    this.feeTarget.classList.add("d-none")
    this.combatTarget.classList.add("d-none")
    this.psyTarget.classList.add("d-none")
    this.spectreTarget.classList.add("d-none")
    this.glaceTarget.classList.add("d-none")
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
    this.solTarget.classList.add("d-none")
    this.feeTarget.classList.add("d-none")
    this.combatTarget.classList.add("d-none")
    this.psyTarget.classList.add("d-none")
    this.spectreTarget.classList.add("d-none")
    this.glaceTarget.classList.add("d-none")
    this.electriqueTarget.classList.remove("d-none")
    this.electriqueTarget.classList.remove("is-active")
  }

  sol() {
    this.allTarget.classList.add("d-none")
    this.planteTarget.classList.add("d-none")
    this.feuTarget.classList.add("d-none")
    this.eauTarget.classList.add("d-none")
    this.insecteTarget.classList.add("d-none")
    this.normalTarget.classList.add("d-none")
    this.poisonTarget.classList.add("d-none")
    this.electriqueTarget.classList.add("d-none")
    this.feeTarget.classList.add("d-none")
    this.combatTarget.classList.add("d-none")
    this.psyTarget.classList.add("d-none")
    this.spectreTarget.classList.add("d-none")
    this.glaceTarget.classList.add("d-none")
    this.solTarget.classList.remove("d-none")
    this.solTarget.classList.remove("is-active")
  }

  fee() {
    this.allTarget.classList.add("d-none")
    this.planteTarget.classList.add("d-none")
    this.feuTarget.classList.add("d-none")
    this.eauTarget.classList.add("d-none")
    this.insecteTarget.classList.add("d-none")
    this.normalTarget.classList.add("d-none")
    this.poisonTarget.classList.add("d-none")
    this.electriqueTarget.classList.add("d-none")
    this.solTarget.classList.add("d-none")
    this.combatTarget.classList.add("d-none")
    this.psyTarget.classList.add("d-none")
    this.spectreTarget.classList.add("d-none")
    this.glaceTarget.classList.add("d-none")
    this.feeTarget.classList.remove("d-none")
    this.feeTarget.classList.remove("is-active")
  }

  combat() {
    this.allTarget.classList.add("d-none")
    this.planteTarget.classList.add("d-none")
    this.feuTarget.classList.add("d-none")
    this.eauTarget.classList.add("d-none")
    this.insecteTarget.classList.add("d-none")
    this.normalTarget.classList.add("d-none")
    this.poisonTarget.classList.add("d-none")
    this.electriqueTarget.classList.add("d-none")
    this.solTarget.classList.add("d-none")
    this.feeTarget.classList.add("d-none")
    this.psyTarget.classList.add("d-none")
    this.spectreTarget.classList.add("d-none")
    this.glaceTarget.classList.add("d-none")
    this.combatTarget.classList.remove("d-none")
    this.combatTarget.classList.remove("is-active")
  }

  psy() {
    this.allTarget.classList.add("d-none")
    this.planteTarget.classList.add("d-none")
    this.feuTarget.classList.add("d-none")
    this.eauTarget.classList.add("d-none")
    this.insecteTarget.classList.add("d-none")
    this.normalTarget.classList.add("d-none")
    this.poisonTarget.classList.add("d-none")
    this.electriqueTarget.classList.add("d-none")
    this.solTarget.classList.add("d-none")
    this.feeTarget.classList.add("d-none")
    this.combatTarget.classList.add("d-none")
    this.spectreTarget.classList.add("d-none")
    this.glaceTarget.classList.add("d-none")
    this.psyTarget.classList.remove("d-none")
    this.psyTarget.classList.remove("is-active")
  }

  spectre() {
    this.allTarget.classList.add("d-none")
    this.planteTarget.classList.add("d-none")
    this.feuTarget.classList.add("d-none")
    this.eauTarget.classList.add("d-none")
    this.insecteTarget.classList.add("d-none")
    this.normalTarget.classList.add("d-none")
    this.poisonTarget.classList.add("d-none")
    this.electriqueTarget.classList.add("d-none")
    this.solTarget.classList.add("d-none")
    this.feeTarget.classList.add("d-none")
    this.combatTarget.classList.add("d-none")
    this.psyTarget.classList.add("d-none")
    this.glaceTarget.classList.add("d-none")
    this.spectreTarget.classList.remove("d-none")
    this.spectreTarget.classList.remove("is-active")
  }

  glace() {
    this.allTarget.classList.add("d-none")
    this.planteTarget.classList.add("d-none")
    this.feuTarget.classList.add("d-none")
    this.eauTarget.classList.add("d-none")
    this.insecteTarget.classList.add("d-none")
    this.normalTarget.classList.add("d-none")
    this.poisonTarget.classList.add("d-none")
    this.electriqueTarget.classList.add("d-none")
    this.solTarget.classList.add("d-none")
    this.feeTarget.classList.add("d-none")
    this.combatTarget.classList.add("d-none")
    this.psyTarget.classList.add("d-none")
    this.spectreTarget.classList.add("d-none")
    this.glaceTarget.classList.remove("d-none")
    this.glaceTarget.classList.remove("is-active")
  }
}
