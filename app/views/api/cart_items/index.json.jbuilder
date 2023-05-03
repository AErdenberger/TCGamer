json.cart_items do
    @cart_items.each do |cart_item|
        json.set! cart_item.id do
            json.extract! cart_item, 
            :id, 
            :buyer_id,
            :card_id,
            :quantity
        end
    end
end

json.cards do
    @cart_items.each do |cart_item|
        json.set! cart_item.card.id do
            json.extract! cart_item.card,
                :id,
                :name,
                :price
                # json.photo cart_item.card.photo.url
        end
    end
end