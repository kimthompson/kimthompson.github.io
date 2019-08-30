import { Stack } from "swing";

const cards = [].slice.call(document.querySelectorAll(".skills_card"));

const stack = Stack();

cards.forEach(targetElement => {
  stack.createCard(targetElement);
});
