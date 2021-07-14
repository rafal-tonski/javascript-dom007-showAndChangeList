let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let elements = [...document.querySelector("ul").children];
let size = 10;

ul.style.display = "none";
elements.forEach((element) => (element.style.fontSize = size + "px"));

btn.addEventListener("click", () => {
  if (ul.style.display === "none") {
    btn.textContent = "A teraz powiększaj o 1 px:";
    ul.style.display = "block";
  } else {
    size++;
    // for (let i = 0; i < elements.length; i++) {
    //   elements[i].style.fontSize = size + "px";
    // }
    elements.forEach((element) => (element.style.fontSize = size + "px"));
  }
});
