Rails.application.routes.draw do
  resources :users
  get 'calculator/gradeCalculator'
  get 'login/loginPage'
  get 'welcome/index'
  get 'home_page/index'
  get 'users/new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  resources :login
  
  root 'users#new'
end
