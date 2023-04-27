class Api::CardsController < ApplicationController
    include ActiveStorage::SetCurrent

    def show
        @card = Card.find(params[:id])
        render "api/cards/show"
    end

    def index
        @cards = Card.all
        render :index
    end

    private
    def card_params
        params.require(:card).permit(:name, :game, :set, :rarity, :foil, :price)
    end
end
