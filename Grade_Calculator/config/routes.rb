Rails.application.routes.draw do
  get 'calculator/gradeCalculator'
  get 'login/loginPage'
  get 'welcome/index'
  get 'home_page/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  resources :login
  
  root 'welcome#index'
end
