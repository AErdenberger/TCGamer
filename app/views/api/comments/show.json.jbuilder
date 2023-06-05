json.comment do
    json.extract! @comment, :id, :commenter_id, :card_id, :body
end