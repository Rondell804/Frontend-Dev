var navbar = document.getElementById("test");
var sticky = navbar.offsetTop;

function scrollAction(){
  if (window.pageYOffset >= sticky) {
   navbar.classList.add("sticky");
 } else {
   navbar.classList.remove("sticky");
 }
}
window.addEventListener('scroll', scrollAction);
