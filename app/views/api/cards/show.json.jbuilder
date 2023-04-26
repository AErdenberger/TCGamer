json.card do
    json.extract! @card, :id, :name, :game, :set, :rarity, :foil, :price
end