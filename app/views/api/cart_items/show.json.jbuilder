json.cart_item do
    json.extract! @cart_item, :id, :buyer_id, :card_id, :quantity
end

json.card do
    json.extract! @cart_item.card, :id, :name, :price 
    json.photo @cart_item.card.photo.url
end