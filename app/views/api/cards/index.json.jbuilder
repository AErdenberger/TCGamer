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
        end
    end
end

