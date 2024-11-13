const theme = window.matchMedia("(prefers-color-scheme: dark)");
const icons = document.getElementsByClassName("icon");
const lenguajes = document.getElementsByClassName("lenguaje");

function ThemeColor(theme) {
  if (theme.matches) {
    console.log("Theme Dark");
    document.body.classList.add("dark");
    AsignarClase(icons, "dark");
    AsignarClase(lenguajes, "dark-lenguajes");
  } else {
    console.log("Theme Light");
    document.body.classList.remove("dark");
    RemoverClase(iconos, "dark");
    RemoverClase(lenguajes, "dark-lenguajes");
  }
}

function AsignarClase(objetos, clase) {
  for (let i = 0; i < objetos.length; i++) {
    objetos[i].classList.add(clase);
  }
}
function RemoverClase(objetos, clase) {
  for (let i = 0; i < objetos.length; i++) {
    objetos[i].classList.remove(clase);
  }
}

ThemeColor(theme);
theme.addEventListener("change", () => ThemeColor(theme));
