import '../stylesheets/style.scss';
import _ from 'lodash';
import $ from 'jquery';

if (module.hot) { // fix hot update 
  module.hot.accept()
}

$(function(){
  $('#add').on('blur', function(){
    $.ajax({
      type: "post",
      url: "/get",
      data: {
        id: $(this).val()
      },
      dataType: "json",
      success: function (data) {
        console.log(data);
      }
    });
  });
})