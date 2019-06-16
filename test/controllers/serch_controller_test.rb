require 'test_helper'

class SerchControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get serch_new_url
    assert_response :success
  end

end
