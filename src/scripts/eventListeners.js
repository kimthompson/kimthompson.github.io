let menuBtn = document.getElementById("menuToggle");

menuBtn.addEventListener("click", function() {
  let menu = document.getElementById("menu");
  menu.classList.toggle("hide");
  menu.classList.toggle("show");
});

let flipCards = document.querySelectorAll(".flip_card");

// console.log(flipCards);

// flipCards.forEach(function(elem) {
// let front = elem.querySelectorAll(".flip_card-front")[0];
// let back = elem.querySelectorAll(".flip_card-back")[0];

// console.log(back);

// elem.addEventListener("onmouseover", function() {
//   console.log("mouseover");

// front.classList.toggle("hide");
// back.classList.toggle("hide");
//   });
// });
