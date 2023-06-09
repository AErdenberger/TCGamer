Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post 'api/test', to: 'application#test'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:show, :create, :destroy]
    resources :cards, only: [:show, :index]
    resources :cart_items, only: [:create, :destroy, :update, :index]
    resources :comments, only: [:create, :update, :destroy, :index]
  end
  
  get '*path', to: "static_pages#frontend_index", constraints: -> (req) {!req.xhr? && req.format.html?}
end
