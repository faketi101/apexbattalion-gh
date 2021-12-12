// sticky nav

$(window).scroll(function () {
  var scrollPos = $(window).scrollTop();

  if (scrollPos > 45) {
    $(".primaryMenu").addClass("hdr-sticky");
  } else if (scrollPos < 45) {
    $(".primaryMenu").removeClass("hdr-sticky");
  }
});

const pMenuLogo = document?.getElementById("pMenuLogo");
pMenuLogo?.addEventListener("click", () => {
  location.href = "../index.html";

});
const pMenuLogo_2 = document?.getElementById("pMenuLogo_2");
pMenuLogo_2?.addEventListener("click", () => {
  location.href = "./index.html";
});

