const gameArea = document.querySelector('.game-area');
const button = document.createElement('button');
const img5 = document.createElement('img')
img5.setAttribute('src', 'road.svg')
img5.style.width = '100%'
img5.style.height = '100%'
button.type = 'button';
button.innerText = 'Start game';
button.setAttribute('id', 'start_but')
button.classList.add('button');
gameArea.style.background = '#000';

button.addEventListener('click', function() {
  wszystko();
  gameArea.style.background = 'none';
  button.style.display = 'none';
  img5.style.display = 'none'
});
gameArea.appendChild(img5)
gameArea.appendChild(button);


  const colorGreenBtn2 = document.getElementById('g');
  const colorPinkBtn2 = document.getElementById('p');
  const colorRedBtn2 = document.getElementById('r');
  const colorBlueBtn2 = document.getElementById('b');

  colorGreenBtn2.addEventListener('click', one);
  colorPinkBtn2.addEventListener('click', two);
  colorRedBtn2.addEventListener('click', three);
  colorBlueBtn2.addEventListener('click', four);

let zdj = "one"
//generowanie przeszkód
function  one(){
  zdj = "one"
}function  two(){
  zdj = "two"
}function  three(){
  zdj = "three"
}function  four(){
  zdj = "four"
}
  
let kolor = document.getElementById('color_car')
let zdj2  

     function wszystko(){
    let isNitroActive
        // utworzenie elementu div z atrybutami id i class
const divElement = document.createElement('div');
divElement.setAttribute('id', 'player-car');
divElement.setAttribute('class', 'car');

// utworzenie elementu img z atrybutami src i alt
const imgElement = document.createElement('img');
imgElement.setAttribute('src', 'red_car.svg');
imgElement.setAttribute('alt', 'auto');
imgElement.setAttribute('id', 'color_car');

// dodanie elementu img do elementu div
divElement.appendChild(imgElement);

// znalezienie elementu o klasie game-area i dodanie do niego elementu div
const gameArea5 = document.querySelector('.game-area');
gameArea5.appendChild(divElement);

 // tworzenie nowego arkusza stylów
const style = document.createElement("style");
style.type = "text/css";
style.innerHTML = `
#game-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      animation: move-background 1.6s linear infinite;
      background-image: url('road.svg');
      background-position: 0 0;
    }
    
    @keyframes move-background {
      from {
        background-position: 0 -500px;
      }
      to {
        background-position:0 0 ;
      }
    }
`;

// dodawanie arkusza stylów do nagłówka dokumentu HTML
const head = document.querySelector("head");
head.appendChild(style);
     
// Pobranie elementów DOM
const startButton = document.querySelector('.start-game');
const gameArea = document.querySelector('.game-area');
let playerSpeed = 10;
let playerCar = document.querySelector('#player-car');
let isLeftArrowPressed = false;
let isRightArrowPressed = false;
let isUpArrowPressed = false;
let isDownArrowPressed = false;
let playerCar2 = document.getElementById('color_car');

// Ustawienie pozycji początkowej gracza
let playerPosition = {
  x: gameArea.offsetWidth / 2 - playerCar.offsetWidth / 2,
  y: 0
};
playerCar.style.left = playerPosition.x + 'px';
playerCar.style.bottom = playerPosition.y + 'px';




 function movePlayer() {
  if (isLeftArrowPressed && playerPosition.x > 0) {
    playerPosition.x -= playerSpeed;
    playerCar.style.left = playerPosition.x + 'px';
  }
  if (isRightArrowPressed && playerPosition.x < 779) {
    playerPosition.x += playerSpeed;
    playerCar.style.left = playerPosition.x + 'px';
  }
  if (isUpArrowPressed && playerPosition.y < 520) {
    playerPosition.y += playerSpeed;
    playerCar.style.bottom = playerPosition.y + 'px';
  }
  if (isDownArrowPressed && playerPosition.y > 0) {
    playerPosition.y -= playerSpeed;
    playerCar.style.bottom = playerPosition.y + 'px';
  }

  // Sprawdzenie, czy obiekt nie wyjeżdża poza obszar gry
  if (playerPosition.x < 0) {
    playerPosition.x = 0;
    playerCar.style.left = '0px';
  }
  if (playerPosition.x > 779) {
    playerPosition.x = 779;
    playerCar.style.left = "779px";
  }
  if (playerPosition.y < 0) {
    playerPosition.y = 0;
    playerCar.style.bottom = '0px';
  }
  if (playerPosition.y >520) {
    playerPosition.y = 520;
    playerCar.style.bottom = playerPosition.y + 'px';
  }
}
document.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 65: // strzałka w lewo
      isLeftArrowPressed = true;
      break;
    case 68: // strzałka w prawo
      isRightArrowPressed = true;
      break;
    case 87: // strzałka w górę
      isUpArrowPressed = true;
      break;
    case 83: // strzałka w dół
      isDownArrowPressed = true;
      break;
  }

  // Aktualizacja pozycji gracza
  movePlayer();
});

document.addEventListener('keyup', function(event) {
  switch (event.keyCode) {
    case 65: // strzałka w lewo
      isLeftArrowPressed = false;
      break;
    case 68: // strzałka w prawo
      isRightArrowPressed = false;
      break;
    case 87: // strzałka w górę
      isUpArrowPressed = false;
      break;
    case 83: // strzałka w dół
      isDownArrowPressed = false;
      break;
  }

  // Aktualizacja pozycji gracza
  movePlayer();
});



// Pętla animacji
function gameLoop() {
  movePlayer();
  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);

//zmiana koloru

let random_num 
 setInterval(function(){
 random_num = Math.floor(Math.random() * 4) + 1;
  },10)

//pobieranie elementów
let gameArea2 = document.querySelector('.game-area');
const obstacle = document.querySelector('.obstacle');
function createObstacle() {

//generowanie przeszkody
  const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    obstacle.setAttribute('id', zdj);
    obstacle.style.left = `${Math.floor(Math.random() * 800) + 25}px`;
    obstacle.style.top = '0px';
    gameArea2.appendChild(obstacle);

  const moveInterval_obstacle = setInterval(() => {
    obstacle.style.top = `${parseInt(obstacle.style.top) + 10}px`;
    if (parseInt(obstacle.style.top) >= 680) {
      clearInterval(moveInterval_obstacle);
      obstacle.remove();
    }
  }, 25);
}
const Interval_obstacle = setInterval(createObstacle, 1200);
const Interval_obstacle2 = setInterval(createObstacle, 2000);


//generowanie zmiany koloru
//zielony
function createcolorg() {

  //generowanie przeszkody
    const colorg = document.createElement('div');
      colorg.classList.add('green');
      colorg.style.left = `${Math.floor(Math.random() * 849) + 25}px`;
      colorg.style.top = '0px';
      gameArea2.appendChild(colorg);
  
    const moveInterval_colorg = setInterval(() => {
      colorg.style.top = `${parseInt(colorg.style.top) + 10}px`;
      if (parseInt(colorg.style.top) >= 680) {
        clearInterval(moveInterval_colorg);
        colorg.remove();
      }
    }, 25);
  }
//kolizja z zielonym
const colorsg = document.getElementsByClassName('green')
let colorg = document.querySelector('.green')

function checkCollisioncolorg(colorg) {
  
  // Pobierz pozycję gracza i przeszkody
  const playerCarRect = playerCar2.getBoundingClientRect();
  const colorgRect = colorg.getBoundingClientRect();

  // Sprawdź, czy elementy nachodzą na siebie
  return !(
    playerCarRect.bottom+10 < colorgRect.top ||
    playerCarRect.top+10 > colorgRect.bottom ||
    playerCarRect.right+10 < colorgRect.left ||
    playerCarRect.left+10 > colorgRect.right
  );

}
//interwały na tworzenie przeszkód
const interval_green = setInterval(createcolorg, 12200);
//różowy 
function createcolorp() {

  //generowanie przeszkody
    const colorp = document.createElement('div');
    colorp.classList.add('pink');
    colorp.style.left = `${Math.floor(Math.random() * 849) + 25}px`;
    colorp.style.top = '0px';
      gameArea2.appendChild(colorp);
  
    const moveInterval_colorp = setInterval(() => {
      colorp.style.top = `${parseInt(colorp.style.top) + 10}px`;
      if (parseInt(colorp.style.top) >= 680) {
        clearInterval(moveInterval_colorp);
        colorp.remove();
      }
    }, 25);
  }
//kolizja z różowym
const colorsp = document.getElementsByClassName('pink')
let colorp = document.querySelector('.pink')

function checkCollisioncolorg(colorp) {
  
  // Pobierz pozycję gracza i przeszkody
  const playerCarRect = playerCar2.getBoundingClientRect();
  const colorpRect = colorp.getBoundingClientRect();

  // Sprawdź, czy elementy nachodzą na siebie
  return !(
    playerCarRect.bottom+10 < colorpRect.top ||
    playerCarRect.top+10 > colorpRect.bottom ||
    playerCarRect.right+10 < colorpRect.left ||
    playerCarRect.left+10 > colorpRect.right
  );

}
//interwały na tworzenie przeszkód
const interval_pink = setInterval(createcolorp, 9200);
//czerwony
function createcolorr() {

  //generowanie przeszkody
    const colorr = document.createElement('div');
    colorr.classList.add('red');
    colorr.style.left = `${Math.floor(Math.random() * 849) + 25}px`;
    colorr.style.top = '0px';
      gameArea2.appendChild(colorr);
  
    const moveInterval_colorr = setInterval(() => {
      colorr.style.top = `${parseInt(colorr.style.top) + 10}px`;
      if (parseInt(colorr.style.top) >= 680) {
        clearInterval(moveInterval_colorr);
        colorr.remove();
      }
    }, 25);
  }
//kolizja z czerwonym

const colorsr = document.getElementsByClassName('red')
let colorr = document.querySelector('.red')
function checkCollisioncolorr(colorr) {
  
  // Pobierz pozycję gracza i przeszkody
  const playerCarRect = playerCar2.getBoundingClientRect();
  const colorrRect = colorg.getBoundingClientRect();

  // Sprawdź, czy elementy nachodzą na siebie
  return !(

    playerCarRect.bottom+10 < colorrRect.top ||
    playerCarRect.top+10 > colorrRect.bottom ||
    playerCarRect.right+10 < colorrRect.left ||
    playerCarRect.left+10 > colorrRect.right
  );

}
//interwały na tworzenie przeszkód
const interval_red = setInterval(createcolorr, 8700);
//niebieski
function createcolorb() {

  //generowanie przeszkody
    const colorb = document.createElement('div');
    colorb.classList.add('blue');
    colorb.style.left = `${Math.floor(Math.random() * 849) + 25}px`;
    colorb.style.top = '0px';
      gameArea2.appendChild(colorb);
  
    const moveInterval_colorb = setInterval(() => {
      colorb.style.top = `${parseInt(colorb.style.top) + 10}px`;
      if (parseInt(colorb.style.top) >= 680) {
        clearInterval(moveInterval_colorb);
        colorb.remove();
      }
    }, 25);
  }
//kolizja z niebieskim

const colorsb = document.getElementsByClassName('blue')
let colorb = document.querySelector('.blue')
function checkCollisioncolorr(colorr) {
  
  // Pobierz pozycję gracza i przeszkody
  const playerCarRect = playerCar2.getBoundingClientRect();
  const colorbRect = colorb.getBoundingClientRect();

  // Sprawdź, czy elementy nachodzą na siebie
  return !(

    playerCarRect.bottom+10 < colorbRect.top ||
    playerCarRect.top+10 > colorbRect.bottom ||
    playerCarRect.right+10 < colorbRect.left ||
    playerCarRect.left+10 > colorbRect.right
  );

}
//interwały na tworzenie przeszkód
const interval_blue = setInterval(createcolorb, 5360);
//generowanie nitro 
function createNitro(){
  const nitro = document.createElement('div');
  nitro.classList.add('nitro');
  nitro.style.display = 'flex'
  nitro.style.left = `${Math.floor(Math.random() * 849) + 25}px`;
  nitro.style.top = '0px';
  gameArea2.appendChild(nitro);

  const moveInterval_nitro = setInterval(function() {
    nitro.style.top = `${parseInt(nitro.style.top) + 10}px`;
    if (parseInt(nitro.style.top) >= 650) {
      clearInterval(moveInterval_nitro);
      nitro.remove();
    }
  }, 25) 
}   nitroInterval = setInterval(createNitro, 2000);
// Pobierz elementy z HTML-a
const nitros = document.getElementsByClassName('nitro')
let nitro = document.querySelector('.nitro')
let obstacles = document.getElementsByClassName('obstacle');
//sprawdza kolizje z nitro
function checkCollisionnitro(nitro) {
  
  // Pobierz pozycję gracza i przeszkody
  const playerCarRect = playerCar2.getBoundingClientRect();
  const nitroRect = nitro.getBoundingClientRect();

  // Sprawdź, czy elementy nachodzą na siebie
  return !(
    playerCarRect.bottom+15 < nitroRect.top ||
    playerCarRect.top+15 > nitroRect.bottom ||
    playerCarRect.right+15 < nitroRect.left ||
    playerCarRect.left+20 > nitroRect.right
  );

}
// Funkcja sprawdzająca kolizję
function checkCollision(obstacle) {
  // Pobierz pozycję gracza i przeszkody
  const playerCarRect = playerCar2.getBoundingClientRect();
  const obstacleRect = obstacle.getBoundingClientRect();

  // Sprawdź, czy elementy nachodzą na siebie
  return !(
    playerCarRect.bottom-20 < obstacleRect.top ||
    playerCarRect.top+20 > obstacleRect.bottom ||
    playerCarRect.right-10 < obstacleRect.left ||
    playerCarRect.left+10 > obstacleRect.right
  );

}

// utworzenie elementu stopera
const timer = document.createElement('div');
timer.setAttribute('id', 'timer');

// ustawienie początkowego czasu stopera
let seconds = 0;
timer.innerHTML = "<b>Punkty: 0</b>"

// funkcja aktualizująca czas stopera
function updateTime() {
  seconds++;
  
  timer.innerHTML ="<b>Punkty: </b>" + Math.floor(seconds);
}

// zmienna przechowująca setInterval
let intervalId;

// funkcja uruchamiająca stoper
function startTimer() {
  intervalId = setInterval(updateTime, 1000);
}

// funkcja zatrzymująca stoper
function stopTimer() {
  clearInterval(intervalId);
}

// znalezienie elementu o klasie game-area i dodanie do niego elementu stopera
const container = document.getElementById('kolizja')
const gameArea3 = document.querySelector('.game-area');
container.appendChild(timer);
startTimer();

let kolizja1 = 0
// Funkcja wywoływana za każdym razem, gdy przeszkoda przesunie się na dół
function moveObstacles() {
  // Dla każdej przeszkody sprawdź, czy doszło do kolizji z graczem

  for (const obstacle of obstacles) { 
    if (checkCollision(obstacle)) {
     stopTimer() 
     const tabela1 = document.getElementById('stertable')
     tabela1.style.display = 'none'
     const table2 = document.getElementById('sam_tab')
     table2.style.display = "none"
     const gameArea = document.querySelector('.game-area');
     const button = document.createElement('button');
     const img5 = document.createElement('img')
     const playerCar23 = document.getElementById('player-car');
     playerCar23.style.display = 'none'
     img5.setAttribute('src', 'road.svg')
     img5.style.width = '100%'
     img5.style.height = '100%'
     button.type = 'button';
     button.innerText = 'reset';
     button.setAttribute('id', 'start_but')
     button.setAttribute('type', 'submit')
     button.classList.add('button');
     gameArea.style.background = '#000';
     clearInterval(nitroInterval);
    clearInterval(interval_red)
    clearInterval(interval_pink)
    clearInterval(Interval_obstacle)
    clearInterval(Interval_obstacle2)
    clearInterval(interval_green)
    clearInterval(interval_blue)


    button.addEventListener('click', function() {
      location.reload();
    });
     gameArea.appendChild(img5)
     gameArea.appendChild(button);

      
  }
  }

  function changeCarColor() {
    if (isNitroActive) {
const carnitro = document.getElementById('color_car');
       playerSpeed = 15;
      const style = document.createElement("style");

style.innerHTML = `
#game-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      animation: move-background 1s linear infinite;
      background-image: url('road.svg');
      background-position: 0 0;
    }
    
    @keyframes move-background {
      from {
        background-position: 0 -500px;
      }
      to {
        background-position:0 0 ;
      }
    }
    .nitro{
      display: none
    }
`


// dodawanie arkusza stylów do nagłówka dokumentu HTML
const head = document.querySelector("head");
head.appendChild(style);
setInterval(seconds = seconds + 0.5 , 5000);
    } else {

     
playerSpeed = 10;
      const style = document.createElement("style");
style.innerHTML = `
#game-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      animation: move-background 1.6s linear infinite;
      background-image: url('road.svg');
      background-position: 0 0;
    }
    
    @keyframes move-background {
      from {
        background-position: 0 -500px;
      }
      to {
        background-position:0 0 ;
      }
    }
    .nitro{
      display: flex
    }
`
    
 

// dodawanie arkusza stylów do nagłówka dokumentu HTML
const head = document.querySelector("head");
head.appendChild(style);
    }

  }

  for(const nitro of nitros){
    if (checkCollisionnitro(nitro)){
      isNitroActive = true;
  changeCarColor();
  setTimeout(function() {
    isNitroActive = false;
    changeCarColor();
  }, 5000);
    }
  }

  for (const colorg of colorsg) { 
    if (checkCollisioncolorg(colorg)) {
   
      let kolor = document.getElementById('color_car')
      seconds = seconds+ 0.1
     kolor.src = 'green_car.svg'

  }
  }
  for (const colorr of colorsr) { 
    if (checkCollisioncolorg(colorr)) {
   
      let kolor = document.getElementById('color_car')
     kolor.src = 'red_car.svg'
     seconds = seconds+ 0.1
  }
  }
  for (const colorb of colorsb) { 
    if (checkCollisioncolorg(colorb)) {
   
      let kolor = document.getElementById('color_car')
     kolor.src = 'blue_car.svg'
     seconds = seconds+ 0.1
  }
  }
  for (const colorp of colorsp) { 
    if (checkCollisioncolorg(colorp)) {
   
      let kolor = document.getElementById('color_car')
     kolor.src = 'pink_car.svg'
     seconds = seconds+ 0.1
  }
  }
  
}

// Wywołaj funkcję `moveObstacles` co 1000 milisekund
setInterval(moveObstacles, 30);

}
      


