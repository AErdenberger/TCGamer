class Comment < ApplicationRecord

    validates :card_id, presence: true
    validates :commenter_id, presence: true
    validates :body, length: {in: 1..255}

    belongs_to :commenter,
    foreign_key: :commenter_id,
    class_name: :User

    belongs_to :card,
    foreign_key: :card_id,
    class_name: :Card
end
