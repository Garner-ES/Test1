

//change the border of an input box to green when it is nolonger empty





//Sticky Nav Bar
window.onscroll = function() {myFunction()};

var navBar = document.getElementById("navigationMenu");
var sticky = navBar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky")
  } else {
    navBar.classList.remove("sticky");
  }
}