class Api::SessionsController < ApplicationController
  def show
    @user = current_user
    if @user
      render "api/users/show"
    else
      render json: {user: nil}
    end
  end

  def create
    credential = params[:credential]
    password = params[:password]
    @user = User.find_by_credentials(credential, password)
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: {errors: ["Invlaid Credentials"]}, status: 422
    end
  end

  def destroy
    logout()
    head :no_content # populate the http response with no content
  end
end
