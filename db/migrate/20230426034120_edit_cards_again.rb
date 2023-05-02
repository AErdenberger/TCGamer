class EditCardsAgain < ActiveRecord::Migration[7.0]
  def change
    remove_column :cards, :price
    add_column :cards, :price, :decimal, precision: 8, scale: 2
  end
end
