// sticky nav

$(window).scroll(function () {
  var scrollPos = $(window).scrollTop();

  if (scrollPos > 45) {
    $(".primaryMenu").addClass("hdr-sticky");
  } else if (scrollPos < 45) {
    $(".primaryMenu").removeClass("hdr-sticky");
  }
});

const pMenuLogo = document.getElementById("pMenuLogo");
pMenuLogo.addEventListener("click", () => {
  location.href = "../index.html";

});
