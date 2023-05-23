json.comments do
    @ccomments.each do |comment|
        json.set! comment.id do
            json.extract! comment, 
            :id, 
            :commentor_id,
            :card_id,
            :body
        end
    end
end