 $(document).ready(function() {

    $("#frontend").hide();
    $("#backend").hide();
    $("#database").hide();
    $("#tools").hide();
    $(".github").hide();
    $("#frontend-jap").hide();
    $("#backend-jap").hide();
    $("#database-jap").hide();
    $("#tools-jap").hide();
    $(".github-jap").hide();
    $(".jap").hide();

    $("#stackSelect").on("change", function() {
      var selected = $(this).val(); 
      // Hide all boxes first
      $(".content-box").hide();
      
      // Show only the one that matches
      if (selected) {
        $("#" + selected).show();
      }
    });

    $(".client").on("click", function() {
      $(".github").hide();
    });
    $(".personal").on("click", function() {
      $(".github").show();
    });

    $(".git").on("click", function() {
      window.open("https://github.com/kylepauloguinto", '_blank');
    });

    // japanese codes
    $("#lang").on("click", function() {
      var $button = $(this);
      let isPressed = $(this).attr("aria-pressed") === "true";
      if(isPressed){
        $button.text('日本語版');
        $("#all").show();
        $(".jap").hide();
        $(".eng").show();
      }else{
        $button.text('English Version');
        $("#all-jap").show();
        $(".jap").show();
        $(".eng").hide();
      }
    });

    $("#stackSelect-jap").on("change", function() {
      var selected = $(this).val(); 
      // Hide all boxes first
      $(".content-box").hide();
      
      // Show only the one that matches
      if (selected) {
        $("#" + selected).show();
      }
    });

    $(".client-jap").on("click", function() {
      $(".github-jap").hide();
    });
    $(".personal-jap").on("click", function() {
      $(".github-jap").show();
    });
});