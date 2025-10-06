$(document).ready(function () {
  var textToTypeEng =
    "Results-driven Software Engineer with 9 years of experience designing and delivering scalable web and cloud applications. Seeking to leverage deep expertise in full-stack development, system architecture, and team leadership to contribute to innovative projects and mentor junior engineers.";
  var currentIndexEng = 0;
  var typingSpeedEng = 20; // milliseconds per character

  function typeWriterEng() {
    if (currentIndexEng < textToTypeEng.length) {
      $(".about-eng").append(textToTypeEng.charAt(currentIndexEng));
      currentIndexEng++;
      setTimeout(typeWriterEng, typingSpeedEng);
    }
  }

  typeWriterEng();

  var textToTypeJap =
    "実績重視のソフトウェアエンジニア。9年間の経験を持ち、スケーラブルなWebおよびクラウドアプリケーションの設計・開発・提供に従事。フルスタック開発、システムアーキテクチャ、チームリーダーシップにおける深い専門知識を活かし、革新的なプロジェクトへの貢献と若手エンジニアの育成を目指しています。";
  var currentIndexJap = 0;
  var typingSpeedJap = 20; // milliseconds per character

  function typeWriterJap() {
    if (currentIndexJap < textToTypeJap.length) {
      $(".about-jap").append(textToTypeJap.charAt(currentIndexJap));
      currentIndexJap++;
      setTimeout(typeWriterJap, typingSpeedJap);
    }
  }

  typeWriterJap();

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

  $("#stackSelect").on("change", function () {
    var selected = $(this).val();
    // Hide all boxes first
    $(".content-box").hide();

    // Show only the one that matches
    if (selected) {
      $("#" + selected).show();
    }
  });

  $(".client").on("click", function () {
    $(".github").hide();
  });
  $(".personal").on("click", function () {
    $(".github").show();
  });

  $(".git").on("click", function () {
    window.open("https://github.com/kylepauloguinto", "_blank");
  });

  // japanese codes
  $("#lang").on("click", function () {
    var $button = $(this);
    let isPressed = $(this).attr("aria-pressed") === "true";
    if (isPressed) {
      $button.text("日本語版");
      $("#all").show();
      $(".jap").hide();
      $(".eng").show();
    } else {
      $button.text("English Version");
      $("#all-jap").show();
      $(".jap").show();
      $(".eng").hide();
    }
  });

  $("#stackSelect-jap").on("change", function () {
    var selected = $(this).val();
    // Hide all boxes first
    $(".content-box").hide();

    // Show only the one that matches
    if (selected) {
      $("#" + selected).show();
    }
  });

  $(".client-jap").on("click", function () {
    $(".github-jap").hide();
  });
  $(".personal-jap").on("click", function () {
    $(".github-jap").show();
  });

  // years of Exp counter
  let yearsFrom = "0";
  let yearsTo = "9";

  $({ Counter: yearsFrom }).animate(
    {
      Counter: yearsTo,
    },
    {
      duration: 3000,
      easing: "swing",
      step: function () {
        $(".years-of-exp").text(Math.ceil(this.Counter));
      },
      complete: function () {
        $(".years-of-exp").text(yearsTo);
      },
    }
  );

  // client projects
  let projectsFrom = "0";
  let projectsTo = "5";

  $({ Counter: projectsFrom }).animate(
    {
      Counter: projectsTo,
    },
    {
      duration: 3000,
      easing: "swing",
      step: function () {
        $(".client-proj").text(Math.ceil(this.Counter));
      },
      complete: function () {
        $(".client-proj").text(projectsTo);
      },
    }
  );

  // client projects
  let stacksFrom = "0";
  let stacksTo = "26";

  $({ Counter: stacksFrom }).animate(
    {
      Counter: stacksTo,
    },
    {
      duration: 2000,
      easing: "swing",
      step: function () {
        $(".stack-count").text(Math.ceil(this.Counter));
      },
      complete: function () {
        $(".stack-count").text(stacksTo);
      },
    }
  );
});
