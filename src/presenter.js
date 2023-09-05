import ops from "./lector";

const first = document.querySelector("#frase");
const form = document.querySelector("#leer-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const frase = first.value;

  div.innerHTML = "<p>" + ops.mostrar(frase) + "</br>"
  + ops.leer(frase)
  + "</p>";
});

