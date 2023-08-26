// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}
//en esta funcion filtro los que del strangeArray son strings y los tengo alfabeticamente, luego defino la funcion para pasar como paramentro a sort para que ordene los string como si estuvieran todos en mayuscula segun ASCII
const soloStrings = strangeArray.filter(item => typeof item ==='string').sort((word1,word2)=>{
  const lower1 = word1.toUpperCase();
  const lower2 = word2.toUpperCase();
  return lower1.localeCompare(lower2);
});

document.addEventListener("DOMContentLoaded", (e) => {
  showList(soloStrings)
  
});
