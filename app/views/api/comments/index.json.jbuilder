json.comments do
    @comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, 
            :id, 
            :commenter_id,
            :card_id,
            :body
        end
    end
end