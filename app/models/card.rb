# == Schema Information
#
# Table name: cards
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  game       :string           not null
#  set        :string           not null
#  rarity     :string           not null
#  foil       :boolean          not null
#  price      :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Card < ApplicationRecord

    CARD_GAMES = ["MTG", "YuGiOh", "Pokemon"]
    CARD_RARITIES = ["Common", "Uncommon", "Rare", "Mythic Rare", "Ultra Rare", 
        "Secret Rare", "Super Rare", "Special Rare"]

    validates :name, presence: true, uniqueness: { scope: :set,
    message: "there can be only one printing of a card per set" },
    length: {in: 1..255}

    validates :game, inclusion: {in: CARD_GAMES}

    validates :set, presence: true, length: {maximum: 6}

    validates :rarity, inclusion: {in: CARD_RARITIES}

    validates :foil, inclusion: [true, false]

    validates :price, numericality: true, format: { with: /\A\d{1,6}(\.\d{0,2})?$\z/ }

    has_one_attached :photo
end
