# ![myAccount Logo](https://user-images.githubusercontent.com/78288118/157034578-aeccdbb6-d0f4-46a2-9cf6-7a2352257597.png) **myAccount**

Keep your account information handy - on the go, where ever you go.

![Welcome Page](https://user-images.githubusercontent.com/78288118/157036091-e772eb44-6e07-4ea4-b703-aeac0b786987.png)
![Sign Up Page](https://user-images.githubusercontent.com/78288118/157036250-40e2fe71-6fd6-43a3-a5e0-c836fb1206c8.png)
![Account Page](https://user-images.githubusercontent.com/78288118/157036354-e422b551-93fe-4cee-b57f-ab640dccc685.png)

<br>

## Getting Started

### Setup

First of all make sure you've created a rails app

```bash
rails new APP_NAME
```

Ensure you have the following gems in your Rails 'Gemfile'

```
gem 'autoprefixer-rails', '10.2.5'
gem 'font-awesome-sass', '5.15.1'
gem 'simple_form', '5.1.0'
gem 'bcrypt', '3.1.16'
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

## Adding new `.scss` files

Look at your main `application.scss` file to see how SCSS files are imported. There should **not** be a `*= require_tree .` line in the file.

```scss
// app/assets/stylesheets/application.scss

// Graphical variables
@import "config/fonts";
@import "config/colors";
@import "config/bootstrap_variables";

// External libraries
@import "bootstrap/scss/bootstrap"; // from the node_modules
@import "font-awesome-sprockets";
@import "font-awesome";

// Your CSS partials
@import "components/index";
@import "pages/index";
```

For every folder (**`components`**, **`pages`**), there is one `_index.scss` partial which is responsible for importing all the other partials of its folder.

**Example 1**: Let's say you add a new `_contact.scss` file in **`pages`** then modify `pages/_index.scss` as:

```scss
// pages/_index.scss
@import "home";
@import "contact";
```

**Example 2**: Let's say you add a new `_card.scss` file in **`components`** then modify `components/_index.scss` as:

```scss
// components/_index.scss
@import "card";
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
