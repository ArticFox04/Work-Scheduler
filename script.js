$(function () {
  $("#currentDay").text(dayjs().format('dddd, MMMM D, YYYY'));
  
  $(function () {

  var currentHour = dayjs().format('HH');
  const htmlHourDivs = $(".time-block");
    $(".saveBtn").on("click", function() {
      localStorage.setItem($(this).parent().attr("id"), $(this).prev().val());
    });
  
  


});
  });