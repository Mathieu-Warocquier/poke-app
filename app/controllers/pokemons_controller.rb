class PokemonsController < ApplicationController
  def index
    # @pokemons = Pokemon.all
    if params[:query].present?
      @pokemons = Pokemon.where('name ILIKE ?', "%#{params[:query]}%")
        else
      @pokemons = Pokemon.all
    end

    respond_to do |format|
      format.html # Follow regular flow of Rails
      format.text { render partial: 'list.html', locals: { pokemons: @pokemons } }
    end
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end
end
