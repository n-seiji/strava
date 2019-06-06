class CreateBaeSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :baespots do |t|
      t.string :name
      t.string :ido
      t.string :keido
      t.string :time
      t.string :photo
      t.string :coment

      t.timestamps
    end
  end
end
