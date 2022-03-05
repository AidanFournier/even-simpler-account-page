require 'gravtastic'
require 'zxcvbn'

class User < ApplicationRecord
    include Gravtastic
    is_gravtastic

    has_secure_password
    
    validates :first_name, presence: true
    validates :last_name, presence: true

    validates :email, presence: true, uniqueness: true
    
    validates :password, presence: true
end
