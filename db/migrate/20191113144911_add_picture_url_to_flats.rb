class AddPictureUrlToFlats < ActiveRecord::Migration[5.2]
  def change
    add_column :flats, :picture_url, :string
  end
end
