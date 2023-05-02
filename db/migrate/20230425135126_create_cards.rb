class CreateCards < ActiveRecord::Migration[7.0]
  def change
    create_table :cards do |t|
      t.string :name, null: false
      t.string :game, null: false
      t.string :image_url, null: false
      t.string :set, null: false
      t.string :rarity, null: false
      t.boolean :foil, null: false
      t.float :price, null: false
      t.timestamps
    end
    add_index :cards, :name, unique: true
    add_index :cards, :game
  end
end
