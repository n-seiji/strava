class RegistrationController < ApplicationController
  protect_from_forgery :except => [:new]
  def new
  end

  def create
  baespot = Baespot.new(baespot_params)
  baespot.save
  flash[:success] = "#{baespot.name}追加しました。"
  redirect_to root_path
  end

private

  def baespot_params
    params.require(:baespot).permit(:name, :ido, :keido, :time, :photo, :coment)
  end

end
