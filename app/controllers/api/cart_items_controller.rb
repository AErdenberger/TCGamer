class Api::CartItemsController < ApplicationController

    wrap_parameters include: CartItem.attribute_names + ["buyerId", "cardId"]

    def create
        @cart_item = CartItem.new(cart_item_params)
        if @cart_item.save
          render :show
        else
          render json: {errors: @cart_item.errors.full_messages}, status: 422
        end
      end

    def index 
        @cart_item = CartItem.first
        @cart_items = User.first.cart_items.includes(:card)
        render :index
    end

    def destroy
        @cart_item = CartItem.find_by(id: params[:id])
        @cart_item.destroy
        render json: {message: "Successfully Removed"}
    end

    def update
        @cart_item = CartItem.find_by(id: params[:id])
        if @cart_item.update(cart_item_params)
            render :show
        else
            render json: {errors: @cart_item.errors.full_messages}, status: 422
        end
    end

    private
    def cart_item_params
        params.require(:cart_item).permit(:buyer_id, :card_id, :quantity)
    end
end
