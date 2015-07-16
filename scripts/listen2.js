$(document).ready(function() {

  $(".icons").on ('click', function (event){
    var formEvent = ($(event.target).attr ('id'));
    $("#send-cd").prop('checked', formEvent === 'send-cd-icon')
    $( ".comments" ).animate({bottom: '10em'}, "medium")
  });
});
