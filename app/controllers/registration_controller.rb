class RegistrationController < ApplicationController
  protect_from_forgery :except => [:new]
  def new
  end

  def create
  baespot = Baespot.new(baespot_params)
  baespot.save
  flash[:success] = "#{bsespot.name}を追加しました"
  redirect_to root_path
  end

private

def eatery_params
  params.require(:registration).permit(:name)
end
end
