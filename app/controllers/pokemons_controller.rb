class PokemonsController < ApplicationController

  def index
    # @pokemons = Pokemon.all
    @pokemons = Pokemon.order(order: :asc)

    if params[:query].present?
      @pokemons = @pokemons.where('name ILIKE ?', "%#{params[:query]}%")
    end

    respond_to do |format|
      format.html # Follow regular flow of Rails
      format.text { render partial: 'pokemons/list', formats: :html, locals: { pokemons: @pokemons } }
    end

  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end
end
