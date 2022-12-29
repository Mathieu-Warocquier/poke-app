# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts "Début de la seed"

Pokemon.destroy_all

def poke_seed
  pokemons = RestClient.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
  pokemons_array = JSON.parse(pokemons)["results"]

    pokemons_array.each do |p|
      pokemon = RestClient.get("#{p["url"]}")

      pokemon_name = JSON.parse(pokemon)["name"]

      pokemon_sprite = JSON.parse(pokemon)["sprites"]["other"]["official-artwork"]["front_default"]

      pokemon_weight = JSON.parse(pokemon)["weight"]

      pokemon_height = JSON.parse(pokemon)["height"]

      pokemon_type = JSON.parse(pokemon)["types"][0]["type"]["name"]

      pokemon_order = JSON.parse(pokemon)["order"]

      Pokemon.create!(
        name: pokemon_name,
        weight: pokemon_weight,
        height: pokemon_height,
        sprites: pokemon_sprite,
        types: pokemon_type,
        order: pokemon_order
      )
    end

end

poke_seed()
puts "Seed ok"
