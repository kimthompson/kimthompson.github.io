let menuBtn = document.getElementById("menuToggle");

menuBtn.addEventListener("click", function() {
  let menu = document.getElementById("menu");
  menu.classList.toggle("hide");
  menu.classList.toggle("show");
});
