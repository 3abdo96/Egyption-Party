$(".open").on("click", function () {
  $(".leftMenu").animate({ width: "250px" }, 1000);
  $(".leftMenu a").css({ display: "block" });
  $(".open").animate({ left: "250px" }, 1000);
  $(".home-content").animate({ marginRight: "250px" }, 1000);
  // $(".leftMenu a").attr("display", "block");
});

$(".closebtn").click(function () {
  $(".leftMenu").animate({ width: "0px" }, 1000);
  $(".leftMenu a").css({ display: "none" });
  $(".open").animate({ left: "0px" }, 1000);
  $(".home-content").animate({ marginRight: "500px" }, 1000);
});

$(".leftMenu a").on("click", function () {
  let sectionId = $(this).attr("href");
  let sectionTop = $(sectionId).offset().top;

  $("html, body").animate({ scrollTop: sectionTop }, 2000);
});

$(".toggle").on("click", function () {
  $(".inner").not($(this).next()).slideUp(500);
  $(this).next().slideDown(500);
});

let countDownTime = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownTime - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((dateDiff % (1000 * 60)) / 1000);

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} H`);
  $(".minutes").html(`${minutes} M`);
  $(".seconds").html(`${sec} S`);

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

var maxLength = 100;
$("textarea").keyup(function (e) {
  var length = $(this).val().length;
  var AmountLeft = maxLength - length;
  if (AmountLeft <= 0) {
    $("#chars").text("your available character finished");
    e.stopPropagation();
  } else {
    $("#chars").text(AmountLeft);
  }
});
