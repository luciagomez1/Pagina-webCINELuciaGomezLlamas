document.addEventListener("DOMContentLoaded", function() {
  let myImage = document.querySelector('#myImage');
  let myButton = document.querySelector('#myButton');
  let myHeading = document.querySelector('#user-name');
  let inputText = document.querySelector('#inputText');
  let dynamicText = document.querySelector('#dynamicText');
  let carrete = document.querySelector('.carrete');

  // Cambio de imagen al hacer clic
  myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'https://www.arteybohemia.com/wp-content/uploads/elementor/thumbs/3-Salas-Cine-Imagenes-3-bis-ojykroda6sgymf0k2t9jacx7ldgifdnuv0bdm87o2k.jpg') {
      myImage.setAttribute('src','https://www.canal12misiones.com/wp-content/uploads/2023/12/lumiere.jpg');
    } else {
      myImage.setAttribute('src', 'https://www.arteybohemia.com/wp-content/uploads/elementor/thumbs/3-Salas-Cine-Imagenes-3-bis-ojykroda6sgymf0k2t9jacx7ldgifdnuv0bdm87o2k.jpg');
    }
  };

  // Función para cambiar el nombre
  function setUserName() {
    let myName = prompt('Por favor, ingresa tu nombre:');
    if (!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = myName;
    }
  }

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

  // Cambio de texto al escribir
  inputText.addEventListener('input', function() {
    dynamicText.textContent = inputText.value;
  });

  
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;

  let posX = 0;
  let posY = 0;
  let velocityX = 10; 
  let velocityY = 3;  

  // Función para mover el carrete
  function movecarrete() {
    posX += velocityX;
    posY += velocityY;

   
    if (posX + 60 > containerWidth || posX < 0) {
     
      posX = 0;
    }

   
    if (posY + 60 > containerHeight || posY < 0) {
      velocityY = -velocityY; 
    }

    carrete.style.left = `${posX}px`;
    carrete.style.top = `${posY}px`;

   
    requestAnimationFrame(movecarrete);
  }

  movecarrete();
});
