class Flat < ApplicationRecord

  scope :search_name, -> (name) { where("name like ?", "%#{name}%")}
  scope :search_price, -> (price) { where price_per_night: price }

  validates :name, presence: true
  validates :address, presence: true
  validates :description, presence: true
  validates :number_of_guests, presence: true, numericality: { only_integer: true }
  validates :price_per_night, presence: true, numericality: { only_integer: true }
end
