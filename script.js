$(document).ready(function () {
  // DISPLAY TIME IN HEADER
  $("#currentDay").text(moment().format("MMM Do YYYY, h:mm:ss a"));

  // SET VARIABLES
  let today = new Date();
  let timeNow = today.getHours();
  let $textArea = $(".textArea");

  // COLOR ROW
  function colorTimeSection() {
    $textArea.each(function () {
      let $textArea = $(this);
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

  let $saveBtn = $(".saveBtn");

  textAreaValue();
  function textAreaValue() {
    $saveBtn.each(function () {
      let save = $(this);
      let saveClicked = save.attr("value");
      console.log(saveClicked);
    });
  }
  // CALL FUNCTION

  displayPlans();

  colorTimeSection();

  // SAVE BUTTON

  function displayPlans() {
    let plans = localStorage.getItem("plans");
    $(".textArea").val(plans);
  }

  $(".saveBtn").on("click", (e) => {
    console.log(e.target);
    // let plans = $(".textArea").text();
    // console.log(plans);

    // localStorage.setItem("plans", plans);
    // displayPlans();
    // $saveBtn.each(function () {
    // let save = $(".saveBtn");
    // let saveClicked = save.attr("value");

    // });
  });
});
