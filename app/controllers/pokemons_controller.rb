class PokemonsController < ApplicationController
  def index
    # @pokemons = Pokemon.all
    if params[:query].present?
      @pokemons = Pokemon.where('name ILIKE ?', "%#{params[:query]}%")
        else
      @pokemons = Pokemon.all
    end
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end
end
