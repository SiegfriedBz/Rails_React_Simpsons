Rails.application.routes.draw do
  root to: 'pages#home'

  # API
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :gifs, only: [ :index, :show, :create ]
    end
  end

end
