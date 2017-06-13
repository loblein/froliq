Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :jobs, only: [:create, :update, :index, :destroy, :show]
    resources :users, only: [:create, :update, :show] do
      resource :employer_detail, only: [:create, :update]
      resource :biography, only: [:create, :update]
      resource :role_selector, only: [:create, :update]
      resource :employer_detail, only: [:create, :update]
    end
  end

end
