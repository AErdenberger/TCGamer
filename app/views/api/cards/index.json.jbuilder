json.cards do
    @cards.each do |card|
        json.set! card.id do
            json.extract! card, 
            :id, 
            :name, 
            :game, 
            :set, 
            :rarity, 
            :foil, 
            :price
            json.photo card.photo.url
        end
    end
end


