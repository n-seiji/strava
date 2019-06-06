class BaeController < ApplicationController
 def web_home
   baespot = Baespot.all
   @recommend = baespot.sample

 end
end
