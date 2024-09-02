const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const child = document.getElementById("child");
const child1 = document.getElementById("child1");
const child2 = document.getElementById("child2");

btn.addEventListener("click", () => {
  child.style.backgroundColor = "#1B1212";
  child1.style.backgroundColor = "#353935";
  child2.style.backgroundColor = "#353935";

  btn.style.backgroundColor = "#353935";
  btn1.style.backgroundColor = "#1B1212";
  btn2.style.backgroundColor = "#1B1212";
});

btn1.addEventListener("click", () => {
  child1.style.backgroundColor = "#1B1212";
  child.style.backgroundColor = "#353935";
  child2.style.backgroundColor = "#353935";

  btn.style.backgroundColor = "#1B1212";
  btn1.style.backgroundColor = "#353935";
  btn2.style.backgroundColor = "#1B1212";
});

btn2.addEventListener("click", () => {
  child2.style.backgroundColor = "#1B1212";
  child.style.backgroundColor = "#353935";
  child1.style.backgroundColor = "#353935";

  btn.style.backgroundColor = "#1B1212";
  btn1.style.backgroundColor = "#1B1212";
  btn2.style.backgroundColor = "#353935";
});