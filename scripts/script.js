// Selección de elementos en el DOM
let myImage = document.querySelector('#myImage'); // Imagen
let myButton = document.querySelector('#myButton'); // Botón
let myHeading = document.querySelector('#user-name'); // Elemento donde se muestra el nombre
let movimiento = document.querySelector('#movimiento'); // Objeto en movimiento (carrete de cine)

// Función para cambiar la imagen al hacer clic
myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'https://www.arteybohemia.com/wp-content/uploads/elementor/thumbs/3-Salas-Cine-Imagenes-3-bis-ojykroda6sgymf0k2t9jacx7ldgifdnuv0bdm87o2k.jpg') {
    myImage.setAttribute('src','https://www.canal12misiones.com/wp-content/uploads/2023/12/lumiere.jpg');
  } else {
    myImage.setAttribute('src', 'https://www.arteybohemia.com/wp-content/uploads/elementor/thumbs/3-Salas-Cine-Imagenes-3-bis-ojykroda6sgymf0k2t9jacx7ldgifdnuv0bdm87o2k.jpg');
  }
};

// Función para pedir al usuario su nombre
function setUserName() {
  let myName = prompt('Por favor, ingresa tu nombre:');
  if (!myName || myName === null) {
    setUserName(); // Si no ingresa un nombre, vuelve a pedirlo
  } else {
    localStorage.setItem('name', myName); // Guardar el nombre 
    myHeading.innerHTML = myName; 
  }
}

// Si ya hay un nombre guardado, mostrarlo; si no, pedirlo
if (!localStorage.getItem('name')) {
  setUserName(); 
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = storedName;
}

// Acción al hacer clic en el botón para cambiar el nombre
myButton.onclick = function() {
  setUserName();
};

// Animación del carrete de cine en movimiento
let posX = 0;
let posY = 0;

function moverObjeto() {
  if (posX < window.innerWidth - 50 && posY === 0) {
    posX += 5; 
  } else if (posX >= window.innerWidth - 50 && posY < window.innerHeight - 50) {
    posY += 5; 
  } else {
    posX = 0; 
    posY = 0; 
  }

  movimiento.style.transform = `translate(${posX}px, ${posY}px)`;
  requestAnimationFrame(moverObjeto);
}

moverObjeto();
