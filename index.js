const logs = document.querySelector(".log")
logs.addEventListener("click", () => {
  // ej. de cambio de tipo de dato en una variable
  var a = 10;
  console.log("a antes del cambio",a);
  a = "hola";
  console.log("a despues del cambio",a);

  // ejemplo de variables globales y locales

  var globalVariable = 10; // Variable global

  function exampleFunction() {
    var localVariable = 20; // Variable local dentro de la función
    console.log("global-->", globalVariable); // Acceso a la variable global desde dentro de la función
    console.log("local-->", localVariable); // Acceso a la variable local desde dentro de la función
  }

  exampleFunction();
  console.log("global afuera-->>", globalVariable); // Acceso a la variable global fuera de la función
  // console.log("local afuera-->>>", localVariable); // Error, la variable local no está definida fuera de la función

  //ejemplo de let y const

  let x = 10;
  console.log("x antes de cambiar-->", x);
  x = 20; // Cambiar el valor de la variable "x"
  console.log("x despues de cambiar-->", x);

  if (true) {
    let y = 30; // Variable "y" solo disponible dentro de este bloque
    console.log("en validacion ",y); // Muestra 30
  }

  // console.log(y); // Error, "y" no está definida fuera del bloque if

  const price = 3.1416;
  // price = 4; // Error, no se puede cambiar el valor de una constante

  if (true) {
    const nombre = "Juan"; // Constante "nombre" solo disponible dentro de este bloque
    console.log("const en validacion",nombre); // Muestra "Juan"
  }

  // console.log(nombre); // Error, "nombre" no está definida fuera del bloque if

  //ejemplo de camelCase

  let nombreCompleto = "Juan Perez";
  let edadUsuario = 30;

  //ejemplo declaracion de variable descriptiva
  let fullName = "Juan Perez";
  let userAge = 30;

  //ejemplo de getElementById

  const test = document.getElementById("probando");
  console.log("getElementById -->>", test);

  //ejemplo de querySelector y querySelectorAll

  const lista = document.querySelector("ul"); // Selecciona el primer ul encontrado
  console.log("querySelector -->>", lista);
  const elementos = document.querySelectorAll("li"); // Selecciona todos los li
  console.log("querySelectorAll -->>", elementos);
  const probandoQuerySelector = document.querySelector(".probando2");
  console.log("querySelector con clases -->>", probandoQuerySelector);

  //ejemplo de innerHTML no olvidar presionar boton de log

  const div = document.getElementById("miDiv");
  div.innerHTML = "Texto modificado"; // Cambia el contenido del div

  // ejemplo de parseInt y parseFloat

  const numeroEntero = parseInt("10");
  console.log("parseInt -->>", numeroEntero);
  const numeroDecimal = parseFloat("3.14");
  console.log("parseFloat -->>", numeroDecimal);

  // Convertir una cadena a un número
  const numero1 = Number("10"); // resultado: 10 (número)

  console.log("Number -->>", numero1);
  // Convertir un booleano a un número
  const numero2 = Number(true); // resultado: 1 (verdadero se convierte a 1)
  const numero3 = Number(false); // resultado: 0 (falso se convierte a 0)

  console.log("Number booleano -->>", numero2, numero3);
  // Convertir valores que no pueden ser convertidos a números
  const numero4 = Number("Hola"); // resultado: NaN (no es un número válido)
  const numero5 = Number(null); // resultado: 0 (null se convierte a 0)

  //ejemplo de coercion

  let b = 10; // x es de tipo número
  let y = "5"; // y es de tipo cadena (string)

  // Coerción implícita
  let suma = b + y; // Se convierte "y" a número y se realiza la suma: 10 + 5 = 105
  console.log("Coercion suma -->>", suma, typeof suma);

  // En lugar de realizar una suma aritmética, la operación x + y realiza una concatenación de cadenas porque uno de los operandos (y) es una cadena.

  //cambiando estilos

  // Ejemplo de cambio de color de fondo
  const elemento = document.getElementById("miElemento");

  // elemento.style.backgroundColor = "red";

  // Ejemplo de cambio de color de texto

  // elemento.style.color = "blue";

  // Ejemplo de cambio de tamaño de fuente

  // elemento.style.fontSize = "20px";

  // Ejemplo de cambio de visibilidad

  // elemento.style.display = "none"; // Para ver los cambios, puedes cambiar "none" por "block"

  // Ejemplo de cambio de posición

  // elemento.style.position = "absolute";
  // elemento.style.top = "100px";
  // elemento.style.left = "200px";
});

const button = document.querySelector(".button");
button.addEventListener("click", () => {
  const input = document.querySelector(".quantity").value;
  console.log("input-->>", input);
  const price = document.querySelector(".price").value;
  console.log("price-->>", price);
  const total = input * price;
  document.querySelector(".total").innerHTML = total;
  // codigo a ejecutar al hacer click en el boton
  button.style.backgroundColor = "red";
});
