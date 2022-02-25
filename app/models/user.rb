class User < ApplicationRecord
    
    has_secure_password
    
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true, uniqueness: true

    # Basic usage.  Defaults to minimum entropy of 18 and no dictionary checking
  validates :password, password_strength: true
  # Minimum entropy can be specified as min_entropy
  validates :password, password_strength: {min_entropy: 40}
  # Specifies that we want to use dictionary checking
  validates :password, password_strength: {use_dictionary: true}
  # Specifies the minimum size of things that should count as words.  Defaults to 4.
  validates :password, password_strength: {use_dictionary: true, min_word_length: 6}
  # Specifies that we want to use dictionary checking and adds 'other', 'common', and 'words' to the dictionary we are checking against.
  validates :password, password_strength: {extra_dictionary_words: ['other', 'common', 'words'], use_dictionary: true}
  # You can also specify a method name to pull the extra words from
  validates :password, password_strength: {extra_dictionary_words: :my_extra_words, use_dictionary: true}
  # Alternative way to request password strength validation on a field
  validates_password_strength :password

  # Return an array of words to add to the dictionary we check against.
  def my_extra_words
    ['extra', 'words', 'here', 'too']
  end
end
