$(function () {
  $("#currentDay").text(dayjs().format('MMMM D, YYYY, dddd, hh:mm:ss'));
  
  $(function () {

  var currentHour = dayjs().format('HH');
  const htmlHourDivs = $(".time-block");
    $(".saveBtn").on("click", function() {
      localStorage.setItem($(this).parent().attr("id"), $(this).prev().val());
    });
    for (let i = 0; i < htmlHourDivs.length; i++) {
      let divId = htmlHourDivs[i].id;
      let divHour = divId[1];
      if (divHour < currentHour) {
        $("#" + divId).addClass("past");
      } else if (divHour === currentHour) {
        $("#" + divId).addClass("present");
      } else  {
        $("#" + divId).addClass("future");
      }
    }
  


});
  });