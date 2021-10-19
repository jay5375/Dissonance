# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :email, :username, :session_token, :password_digest, presence: true 
    validates :email, :session_token, uniqueness: true 
    validates :password, length: {minimum: 6, allow_nil: true}
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            return user
        else
            return nil
        end
    end

    def password
        @password
    end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        pw = BCrypt::Password.new(self.password_digest)
        pw.is_password?(password)
    end

    def self.generate_session_token!
        SecureRandom.urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token!
    end

    def reset_session_token!
        self.session_token = User.generate_session_token!
        self.save
        self.session_token
    end

    has_many :created_servers,
        foreign_key: :author_id,
        class_name: :Server 
    
    has_many :joined_servers, 
        foreign_key: :user_id,
        class_name: :UserServer

    has_many :servers,
        through: :joined_servers,
        source: :server

    has_many :messages, 
        foreign_key: :author_id,
        class_name: :Message

    has_many :direct_messages, 
        foreign_key: :sender_id,
        class_name: :DirectMessage

    has_one :user1,
        foreign_key: :user1_id,
        class_name: :DmChannel

    has_one :user2, 
        foreign_key: :user2_id,
        class_name: :DmChannel
    
end
