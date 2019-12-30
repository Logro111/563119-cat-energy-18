var MainNav = document.querySelector(".main-navigation");
var NavButton = document.querySelector(".main-navigation__toggle");

MainNav.classList.remove("main-navigation--nojs");

NavButton.addEventListener("click", function(){
  if (MainNav.classList.contains("main-navigation--closed")) {
    MainNav.classList.remove("main-navigation--closed");
  }
  else {
    MainNav.classList.add("main-navigation--closed");
  }
});
