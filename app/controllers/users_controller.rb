class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    if @user.after_save
      redirect_to profile_path
    else
      render 'new'
    end
  end

  def show
  end

  def edit
  end

  def update
    @user = User.find(params[id])
    if @user.update(user_params)
      redirect_to profile_path
    else
      render 'new'
    end 
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end 
end
