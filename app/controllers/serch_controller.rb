class SerchController < ApplicationController
  protect_from_forgery :except => [:new]
  def new
    baespots = Baespot.all
    baespots = baespots.shuffle
    @baespots_1 = baespots[0]
    @baespots_2 = baespots[1]
    @baespots_3 = baespots[2]
  end
end
