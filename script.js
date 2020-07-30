$(document).ready(function () {

  // DISPLAY TIME IN HEADER 
  $("#currentDay").text(moment().format("MMM do YYYY"));




  // SET VARIABLES 
  let today = new Date();
  let timeNow = today.getHours();
  let $timeSection = $(".timeSection");



  // CALL FUNCTION 

  displayPlans();



  // SAVE BUTTON

  function displayPlans() {
    let plans = localStorage.getItem("plans");
    $(".textArea").val(plans)
  }

  $(".saveBtn").on("click", () => {

    let plans = $(this.value).val();
    console.log(plans);

    localStorage.setItem("plans", plans)
    displayPlans();

    // COLOR ROW 
    colorTimeSection();
    function colorTimeSection() {
      $timeSection.each(function () {
        let $currentSection = $(this);
        console.log($currentSection)
        let currentHour = parseInt($currentSection.attr("time"));
        console.log(currentHour);

        if (currentHour < timeNow) {
          // grey
          $(".textArea").addClass("past");
        } else if (currentHour == timeNow) {
          red
          $(".textArea").addClass("present");
        } else {
          // green
          $(".textArea").addClass("future");
        }

      })
    }


  });
});





