let menuBtn = document.getElementById("menuToggle");

menuBtn.addEventListener("click", function() {
  let menu = document.getElementById("menu");
  menu.classList.contains("hide")
    ? menu.classList.remove("hide")
    : menu.classList.add("hide");
});
