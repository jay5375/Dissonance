Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session, only: [:create, :destroy]
    resources :servers do 
      resources :channels, only: [:create, :edit]
    end
    resources :users_servers, only: [:create, :destroy, :index]
    resources :channels, only: [:index, :show, :update, :destroy]
    resources :messages, only: [:index, :create, :destroy]
    resources :direct_messages, only: [:index, :create, :destroy, :update, :show]
    resources :dm_channels, only: [:index, :create, :destroy, :show]
  end
  root "static_pages#root"
end
