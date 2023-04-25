# == Schema Information
#
# Table name: cards
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  game       :string           not null
#  image_url  :string           not null
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

    validates :image_url, presence: true

    validates :set, presence: true, length: {maximum: 6}

    validates :rarity, inclusion: {in: CARD_RARITIES}

    validates :foil, presence: true

    validates :price, presence: true, format: { with: /\A\d+(?:\.\d{2})?\z/ }, numericality: { greater_than: 0, less_than: 1000000 }
end
