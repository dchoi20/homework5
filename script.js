$(document).ready(function () {

  // DISPLAY TIME IN HEADER 
  $("#currentDay").text(moment().format("MMM do YYYY"));




  // SET VARIABLES 
  let today = new Date();
  let timeNow = today.getHours();
  let $timeSection = $(".timeSection");

  // COLOR ROW 
  function colorTimeSection() {
    $timeSection.each(function () {
      let $currentSection = $(this);
      let currentHour = parseInt($currentSection.attr("time"));
      console.log(currentHour);


      if (currentHour == timeNow) {
        $currentSection.addClass("present").removeClass("past");
      }
      if (currentHour < timeNow) {
        $currentSection.addClass("past").removeClass("present");
      }
      if (currentHour > timeNow) {
        $currentSection.addClass("future").removeClass("past present");
      }

    })
  }


  // CALL FUNCTION 

  displayPlans();


  colorTimeSection();

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



  });
});





