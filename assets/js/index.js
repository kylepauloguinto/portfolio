$(document).ready(function () {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/portfolio/assets/js/service-worker.js")
      .then((reg) => console.log("Service Worker registered", reg))
      .catch((err) => console.log("Service Worker error", err));
  }
  const targetElement = document.querySelector(".flip-container");

  setInterval(() => {
    targetElement.classList.toggle("hover");
  }, 2000); // Toggle every 2000 milliseconds (2 seconds)

  var textToTypeEng =
    "Senior Software Engineer with 10 years of experience building and improving web applications across frontend, backend, and database layers." +
    "\n\n\t"+
    "My core expertise includes Java, Spring Framework, JavaScript, Angular, Vue.js, PostgreSQL, and AWS. I have experience across the full development lifecycle, from requirements and detailed design to development, testing, deployment, and maintenance."+
    "\n\n\t"+
    "I’m particularly focused on application performance and database optimization. Some of my key achievements include:"+
    "\n"+
    "• Improved PostgreSQL query latency from approximately 1,000ms to 20ms through query-plan analysis, indexing, and eliminating unnecessary database operations."+
    "\n"+
    "• Reduced overall application response time by approximately 60% through database optimization, pagination, selecting only required fields, and caching."+
    "\n"+
    "• Led the implementation of a MotionBoard feature from requirements through production deployment."+
    "\n"+
    "• Mentored 2 engineers, providing technical guidance and supporting development quality."+
    "\n\n\t"+
    "I value clean, maintainable, and reliable software, with a strong focus on performance, data integrity, and delivering practical solutions."+
    "\n\t"+
    "I also continuously develop my skills through personal projects and modern technologies such as React, TypeScript, Supabase, and AWS.";
  var currentIndexEng = 0;
  var typingSpeedEng = 25; // milliseconds per character.
  let currentElementEng = $(".about-eng");
  let insideBullet = false;

  function typeWriterEng() {
    if (currentIndexEng < textToTypeEng.length) {
      const char = textToTypeEng.charAt(currentIndexEng);

      // New line
      if (char === "\n") {
        if (insideBullet) {
          // End the bullet line, but DON'T add <br>
          currentElementEng = $(".about-eng");
          insideBullet = false;
          $(".about-eng .bullet-line .blink_me_inside").remove();
        } else {
          // Normal text: add line break
          $(".about-eng").append("<br>");
        }
      } else if (char === "\t") {
        // show main blink
        $(".eng .blink_me").show();
        currentElementEng.append("&nbsp;&nbsp;&nbsp;&nbsp;");
      }
      // Bullet starts
      else if (char === "•") {
        const span = $('<span class="bullet-line"></span>');

        currentElementEng = $('<span></span>');
        currentElementEng.append("•");
        span.append(currentElementEng);

        //add inside blink
        const blink = $('<span class="blink_me_inside">|</span>');
        span.append(blink);
        

        $(".about-eng").append(span);

        // hide main blink
        $(".eng .blink_me").hide();

        insideBullet = true;
      }

      // Normal character
      else {
          currentElementEng.append(char);
      }

      currentIndexEng++;
      setTimeout(typeWriterEng, typingSpeedEng);
    }
  }

  typeWriterEng();

  var textToTypeJap =
    "フロントエンド、バックエンド、データベースの各レイヤーにわたるWebアプリケーションの構築および改善に10年の経験を持つシニアソフトウェアエンジニアです。"+
    "\n\n\t"+
    "主な専門分野は、Java、Spring Framework、JavaScript、Angular、Vue.js、PostgreSQL、AWSです。要件定義や詳細設計から、開発、テスト、デプロイ、保守に至るまで、開発ライフサイクル全般にわたる経験があります。"+
    "\n\n\t"+
    "特に、アプリケーションのパフォーマンスとデータベースの最適化に注力しています。主な実績は以下の通りです。"+
    "\n"+
    "• クエリプランの分析、インデックスの作成、不要なデータベース操作の排除により、PostgreSQLのクエリレイテンシを約1,000msから20msに短縮しました。"+
    "\n"+
    "• データベースの最適化、ページネーション、必要なフィールドのみの選択、キャッシュの活用により、アプリケーション全体の応答時間を約60%短縮しました。"+
    "\n"+
    "• MotionBoardの新機能について、要件定義から本番環境へのデプロイまでを主導しました。"+
    "\n"+
    "• 2名のエンジニアを指導し、技術的な助言を提供するとともに、開発品質の向上を支援しました。"+
    "\n\n\t"+
    "私は、クリーンで保守性が高く、信頼性の高いソフトウェアを重視しており、特にパフォーマンス、データの整合性、そして実用的なソリューションの提供に重点を置いています。"+
    "\n\t"+
    "また、個人プロジェクトや、React、TypeScript、Supabase、AWSなどの最新技術を通じて、継続的にスキル向上に努めています。";
  var currentIndexJap = 0;
  var typingSpeedJap = 30; // milliseconds per character.
  let currentElementJap = $(".about-jap");
  let insideBulletJap = false;

  function typeWriterJap() {
    if (currentIndexJap < textToTypeJap.length) {
      const char = textToTypeJap.charAt(currentIndexJap);

      if (char === "\n") {
        if (insideBulletJap) {
          // End the bullet line, but DON'T add <br>
          currentElementJap = $(".about-jap");
          insideBulletJap = false;
          $(".about-jap .bullet-line .blink_me_inside").remove();
        } else {
          // Normal text: add line break
          $(".about-jap").append("<br>");
        }
      } else if (char === "\t") {
        $(".jap .blink_me").show();
        currentElementJap.append("&nbsp;&nbsp;&nbsp;&nbsp;");
      }
      // Bullet starts
      else if (char === "•") {
        const span = $('<span class="bullet-line"></span>');

        currentElementJap = $('<span></span>');
        currentElementJap.append("•");
        span.append(currentElementJap);

        //add inside blink
        const blink = $('<span class="blink_me_inside">|</span>');
        span.append(blink);

        $(".about-jap").append(span);

        // hide main blink
        $(".jap .blink_me").hide();

        insideBulletJap = true;
      }

      // Normal character
      else {
          currentElementJap.append(char);
      }

      currentIndexJap++;
      setTimeout(typeWriterJap, typingSpeedJap);
    }
  }

  typeWriterJap();

  $("#frontend").hide();
  $("#backend").hide();
  $("#database").hide();
  $("#tools").hide();
  $("#cloud").hide();
  $("#os").hide();
  $("#archi").hide();
  $("#paradigm").hide();
  $("#appDev").hide();
  $(".github").hide();
  $("#frontend-jap").hide();
  $("#backend-jap").hide();
  $("#database-jap").hide();
  $("#tools-jap").hide();
  $("#cloud-jap").hide();
  $("#os-jap").hide();
  $("#archi-jap").hide();
  $("#paradigm-jap").hide();
  $("#appDev-jap").hide();
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
  let yearsTo = "10";

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
  let projectsTo = "6";

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

  // personal projects
  let personalProjFrom = "0";
  let personalProjTo = "4";

  $({ Counter: personalProjFrom }).animate(
    {
      Counter: personalProjTo,
    },
    {
      duration: 3000,
      easing: "swing",
      step: function () {
        $(".personal-proj").text(Math.ceil(this.Counter));
      },
      complete: function () {
        $(".personal-proj").text(personalProjTo);
      },
    }
  );

  // stacks projects
  let stacksFrom = "0";
  let stacksTo = "39";

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

function composeEmail() {
    const to = "guintokyle01@gmail.com";
    const from = "";
    const subject = "";
    const body = "";
    const gmailUrl =
        "https://mail.google.com/mail/?view=cm" +
        "&fs=1" +
        "&to=" + encodeURIComponent(to) +
        "&su=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    window.open(gmailUrl, "_blank");
}
