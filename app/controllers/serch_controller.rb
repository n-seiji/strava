class SerchController < ApplicationController
  protect_from_forgery :except => [:new]

  def new
    baespots = Baespot.all
    baespots = baespots.shuffle
    @baespots_1 = baespots[0]
    @baespots_2 = baespots[1]
    @baespots_3 = baespots[2]
  end

  def show_1
    @baespots_1 = @baespots_1
  end
  private

    def baespot_params
      params.require(:baespot).permit(:name, :ido, :keido, :time, :photo, :coment)
    end


end
