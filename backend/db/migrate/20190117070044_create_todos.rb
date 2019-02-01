class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :text
      t.boolean :is_acted
    end
  end
end
