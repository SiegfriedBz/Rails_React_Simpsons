class Gif < ApplicationRecord
  validates :title, presence: true
  validates :url, presence: true

end
