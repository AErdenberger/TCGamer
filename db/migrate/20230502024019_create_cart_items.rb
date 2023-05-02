class CreateCartItems < ActiveRecord::Migration[7.0]
  def change
    create_table :cart_items do |t|
      t.references :card, null: false, foreign_key: true
      t.references :buyer, null: false, foreign_key: {to_table: :users}
      t.integer :quantity
      t.timestamps
    end
  end
end
