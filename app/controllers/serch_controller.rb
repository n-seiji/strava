class SerchController < ApplicationController
  protect_from_forgery :except => [:new]
  def new
    baespots = Baespot.all
    @baespots = baespots.sample
  end
end
