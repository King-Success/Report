$(document).ready(function() {
  console.log("_____ready to work_______");
  $(".resolve").on("click", function() {
    const reportId = $(this).data("id");
    $(`div[data-grid-${reportId}]`)[0].addEventListener(
      "transitionend",
      function() {
        this.remove();
      }
    );
    $.ajax({
      url: `/reports/${reportId}`,
      type: "PUT",
      data: {
        ticketState: "CLOSED"
      },
      success: function(data) {
        $(`*[data-state-${reportId}]`)[0].textContent = `State: ${data.state}`;
        setTimeout(function() {
          $(`div[data-grid-${reportId}]`).addClass("grid--delete");
        }, 100);
      }
    });
  });
  $(".block").on("click", function() {
    const reportId = $(this).data("id");
    $.ajax({
      url: `/reports/${reportId}/block`,
      type: "GET",
      success: function(data) {
        console.log(data);
        $(`*[data-grid-${reportId}]`).addClass("disabled");
      }
    });
  });
});
