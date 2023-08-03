// calculadora de sumas

document.getElementById("sumarBtn").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  const resultado = num1 + num2;
  document.getElementById("resultado").textContent = resultado;
});

// contador de clicks

let contador = 0;

document.getElementById("clicBtn").addEventListener("click", () => {
  contador++;
  document.getElementById("contador").textContent = contador;
});

// cambio de color de fondo

const button = document.getElementById("cambiarColorBtn");

button.addEventListener("click", () => {
  const color = "red";
  document.body.style.backgroundColor = color;
});
