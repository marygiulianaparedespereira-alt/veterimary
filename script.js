const input = document.getElementById("nombre");
const button = document.getElementById("agregar");
const lista = document.getElementById("lista");
const i= document.getElementById("email");
const a = document.getElementById("telefono");



button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  li.textContent=i.value;
  li.textContent=a.value;
  lista.appendChild(li);
});
