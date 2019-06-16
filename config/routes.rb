Rails.application.routes.draw do
  get 'serch/new'
  get 'registration/new'
  get 'bae/web_home'
  root 'bae#web_home'
  post 'serch/new'
  post 'registration/new'
  post 'registration/create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
