class EditCards < ActiveRecord::Migration[7.0]
  def change
    remove_column :cards, :image_url
  end
end
