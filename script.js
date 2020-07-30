$(document).ready(function () {
  $("#currentDay").text(moment().format("MMM do YYYY"));
  let today = new Date();
  timeNow = today.getHours();

  //   $(".saveBtn")

  // if ( < timeNow) {
  //   // grey
  //   $(".textArea").addClass("past");
  // }else if ( == timeNow) {
  //   red
  //   $(".textArea").addClass("present");
  // } else {
  //   // green
  //   $(".textArea").addClass("future");
  // }

  // SAVE BUTTON

  $(".hour").on("mouseover", () => {});
});

$(".saveBtn").on("click", () => {});
