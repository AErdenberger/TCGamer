json.card do
    json.extract! @card, :id, :name, :game, :set, :rarity, :foil, :price 
    json.photo @card.photo.url
end