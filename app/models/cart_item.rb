# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  card_id    :bigint           not null
#  buyer_id   :bigint           not null
#  quantity   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartItem < ApplicationRecord

    validates :card_id, presence: true
    validates :buyer_id, presence: true
    validates :quantity, numercality: {only_integer: true}

    belongs_to :buyer,
    foreign_key: :buyer_id,
    class_name: :User

    belongs_to :card,
    foreign_key: :card_id,
    class_name: :Card
end
