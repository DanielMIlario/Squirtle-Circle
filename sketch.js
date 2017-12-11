var x = 0;
var y = 0;
var myCanvasWidth = 2000;
var myCanvasHeight = 2000;
var Squi;
var Pokeball;
var radius = 100;
var angle = 0;
var speed = 0.03;
var centerX = 850;
var centerY = 500;
var Bulb;
var Char;
var Poke2;
var Poke5;
var Poke8;
var Poke9;
var Poke6;
var Poke3;



function setup() {
  noFill();
  createCanvas(myCanvasWidth, myCanvasHeight);
  makeBackground();
}

function preload() {
  Squi = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png")
  Pokeball = loadImage("https://cdn.iconscout.com/public/images/icon/free/png-512/pokemon-pokeball-game-go-3d4d7b6a9453829b-512x512.png")
  Bulb = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")
  Char = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png")
  Poke8 = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png")
  Poke2 = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png")
  Poke5 = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png")
  Poke6 = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png")
  Poke3 = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png")
  Poke9 = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png")
}

function makeBackground() {
  background(50, 100, 50);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    radius = radius + 10;
  } else if (keyCode === DOWN_ARROW) {
    radius = radius - 10;
  }
  if (keyCode === RIGHT_ARROW) {
    speed = speed + 0.01;
  } else if (keyCode === LEFT_ARROW) {
    speed = speed - 0.01;
  }
}

function draw() {
  clear();
  background(50, 100, 50)
  noFill();
  image(Pokeball, centerX, centerY);
  noFill();
  translate(centerX, centerY);
  rotate (angle);
  image(Bulb, 150, 140, 140)
  image(Squi, 50, 130, 130)
  image(Char, 100, 130, 130)
  image(Poke8, 250, 140, 140)
  image(Poke5, 410, 130, 130)
  image(Poke2, 330, 130, 130)
  image(Poke9, 525, 140, 140)
  image(Poke6, 600, 130, 130)
  image(Poke3, 675, 130, 130)


  angle = angle + speed;

    if (angle >= 0) {
      speed;
    }
}
