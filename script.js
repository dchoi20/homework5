$(document).ready(function () {
  // DISPLAY TIME IN HEADER
  $("#currentDay").text(moment().format("MMM Do YYYY, h:mm:ss a"));

  // SET VARIABLES
  let today = new Date();
  let timeNow = today.getHours();
  let $textArea = $(".textArea");
  let dailyPlanner = [];
  let dataTime = $("textArea").attr("data-time");
  // COLOR ROW
  function colorTimeSection() {
    $textArea.each(function () {
      let $textArea = $(this);
      console.log($textArea);
      let currentHour = parseInt($textArea.attr("data-time"));
      console.log(currentHour);

      if (currentHour == timeNow) {
        // red
        $textArea.addClass("present").removeClass("past");
      }
      if (currentHour < timeNow) {
        // grey
        $textArea.addClass("past").removeClass("present");
      }
      if (currentHour > timeNow) {
        // green
        $textArea.addClass("future").removeClass("past present");
      }
    });
  }

  // let $saveBtn = $(".saveBtn");

  // CALL FUNCTION

  colorTimeSection();

  // SAVE BUTTON

  $(".saveBtn").on("click", () => {
    // let plans = $(".textArea").val();
    console.log(parseInt($(".textArea").attr("data-time")));

    dailyPlanner.push({
      time: dataTime,
      plan: "hello",
    });
    localStorage.setItem("planner", JSON.stringify(dailyPlanner));

    console.log($textArea.attr("data-time"));
    console.log($(this).parent());
  });
});
