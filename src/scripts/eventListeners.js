let menuBtn = document.getElementById("menuToggle");

menuBtn.addEventListener("click", function() {
  console.log("menu toggled");

  let menu = document.getElementById("menu");
  menu.classList.toggle("hide");
  menu.classList.toggle("show");
});
