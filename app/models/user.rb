require 'gravtastic'
require 'zxcvbn'

class User < ApplicationRecord
    include Gravtastic
    is_gravtastic

    has_secure_password
    
    validates :first_name, presence: true
    validates :last_name, presence: true

    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
    
    validates :password, presence: true
end
