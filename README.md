# ![myAccount Logo](https://user-images.githubusercontent.com/78288118/157034578-aeccdbb6-d0f4-46a2-9cf6-7a2352257597.png) **myAccount**


Keep your account information handy - on the go, where ever you go.


![Welcome Page](https://user-images.githubusercontent.com/78288118/157036091-e772eb44-6e07-4ea4-b703-aeac0b786987.png)
![Sign Up Page](https://user-images.githubusercontent.com/78288118/157036250-40e2fe71-6fd6-43a3-a5e0-c836fb1206c8.png)
![Account Page](https://user-images.githubusercontent.com/78288118/157036354-e422b551-93fe-4cee-b57f-ab640dccc685.png)


<br>
   

## Getting Started
### Setup

Ensure you have the following gems in your Rails 'Gemfile'
```
gem 'autoprefixer-rails', '10.2.5'
gem 'font-awesome-sass', '5.15.1'
gem 'simple_form', '5.1.0'
gem 'bcrypt', '3.1.16'
gem 'bootstrap', '4.6.0'
gem 'gravtastic', '3.2.6'
gem 'zxcvbn', '0.1.7'
```

Install gems
```
bundle install
```
Install JS packages
```
yarn install
```

### DB Setup
```
rails db:create
rails db:migrate
rails db:seed
```

### Run a server
```
rails s
```

## Built With
- [Rails 6](https://guides.rubyonrails.org/) - Backend / Frontend
- [Stimulus JS](https://stimulus.hotwired.dev/) - Frontend JS Framework
- [PostgreSQL](https://www.postgresql.org/) - Database
- [SCSS](https://sass-lang.com/) - Styling
- [Bootstrap](https://getbootstrap.com/) — Styling
- [Canva](https://www.canva.com/) - Images

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
<br>
<br>
<br>

Template Rails app generated with [lewagon/rails-templates](https://github.com/lewagon/rails-templates), created by the [Le Wagon coding bootcamp](https://www.lewagon.com) team.
