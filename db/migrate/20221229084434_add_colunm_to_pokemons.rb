class AddColunmToPokemons < ActiveRecord::Migration[7.0]
  def change
    add_column :pokemons, :weight, :integer
    add_column :pokemons, :height, :integer
    add_column :pokemons, :sprites, :string
    add_column :pokemons, :types, :string
    add_column :pokemons, :order, :integer

  end
end
