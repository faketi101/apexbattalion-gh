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
  location.href = "./index.html";

});
const pMenuLogo_2 = document?.getElementById("pMenuLogo_2");
pMenuLogo_2?.addEventListener("click", () => {
  location.href = "../index.html";
});

const drop_menu = document?.getElementById("drop_menu");
const res_menu = document?.getElementById("res_menu");
const res_menu_close = document?.getElementById("res_menu_close");

drop_menu?.addEventListener("click", () => {
  res_menu.classList.add("d_show");
});

res_menu_close?.addEventListener("click", () => {
  res_menu.classList.add("d_hide");
});


const loader = document.getElementById("loader");
const body_content = document.getElementById("body_content");
window.addEventListener("load", () => {
  loader.classList.add("d_hide");
  body_content.classList.add("d_show");
});