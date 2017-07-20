//snow variables
var snowQuan;
var snowQuantity = 400;
var xPositionSnow = [];
var yPositionSnow = [];
var flakeSize = [];
var directionSnow = [];
var rotationSnow = [];
var minFlakeSize = 1;
var maxFlakeSize = 7;
var snowColor = 255;


//rain variables
//var regen = sliderRain.value;
var rainQuan;
var rainQuantity = 2300;
var xPositionRain = [];
var yPositionRain = [];
var dropSize = [];
var directionRain = [];
var rotationRain = [];
var minDropSize = 2;
var maxDropSize = 4;
var rainColor = 255;
//mountain variables

var farbton = 196;
//h = hue, s = saturation, l = brightness

var c1 = {
  h: farbton,
  s: 20,
  l: 20
};

var c2 = {
  h: farbton,
  s: 100,
  l: 58
};

var c3 = {
  h: farbton,
  s: 100,
  l: 72
};

var c4 =  {
  h: farbton,
  s: 60,
  l: 86
};


var c5 = {
  h: farbton,
  s: 40,
  l: 100
};

var c6 = {
  h: 200,
  s: 100,
  l: 100
}

//interface variables
var sliderSnow;
var sliderRain;
var sliderCloud;


//hier kannst du die farben per triangle setzen
var colors = [c3, c3, c2, c1, c1, c5, c3, c4, c4, c5, c3, c5, c1, c2, c3, c4, c5, c1, c3, c4, c5, c2, c5, c2, c4, c1, c2, c1, c2, c3, c1, c3, c3, c2, c1, c2, c1, c2, c2, c2, c1, c1, c2, c4, c1, c2, c2, c2, c1, c5, c2, c2, c1, c3, c2, c1, c3, c2, c1, c2, c2];
var colorsRo = [c2, c1, c3, c5, c3, c4, c5, c2, c2, c4, c3, c2, c4, c1, c2, c4, c5, c1, c2, c1, c2, c1, c5, c2, c1, c2, c2, c4, c3, c5, c1, c5, c4, c3, c5, c3, c4, c1, c1, c4, c3, c2, c4, c4, c4, c1, c2, c5, c4, c5, c4, c5, c4, c1, c2, c3, c1, c2, c3, c4, c3, c2, c1, c2];
var colorsGo = [c1, c2, c3, c2, c1, c3, c3, c3, c2, c4, c3, c5, c1, c2, c1, c5, c4, c5, c4, c4, c3, c3, c4, c5, c3, c2, c1, c5, c4, c5, c3, c4, c5, c4, c5, c4, c2, c1, c4, c2, c1, c2, c5, c1, c2, c1, c4, c3, c3, c4, c4, c5, c4, c3, c5, c1, c5, c2, c2, c1, c3, c5, c4, c2, c2, c4, c5, c4, c1, c2, c4, c3, c4, c2, c3, c1, c1, c1, c2, c3, c2, c3, c5, c4, c3, c5, c2, c2, c1, c2, c1, c2];
var colorsKl = [c2, c1, c5, c2, c3, c4, c5, c4, c1, c5, c1, c2, c3, c1, c4, c3, c1, c2, c3, c2, c1, c3, c2, c1, c3, c3, c2, c5, c3, c1, c2, c2, c2, c2, c1, c2, c3, c1, c5, c4, c3, c4, c5, c2, c3, c2, c3, c3, c3, c2, c1, c2, c3, c1, c2, c3, c1, c3, c5, c5, c1, c2, c3, c3, c4, c5, c4, c3, c5, c3, c4, c5];


function setup() {
  createCanvas(600, 400);
  createP('Schnee').position(40,400);
  sliderSnow = createSlider(0,2000,0)
  sliderSnow.position(0,440);
  createP('Regen').position(285,400);
  sliderRain = createSlider(0,5000,0);
  sliderRain.position(240,440);
  createP('Wolken').position(510,400);
  sliderCloud = createSlider(0,100,50);
  sliderCloud.position(470,440);
  background(255);

//snow setup
  frameRate(25);
  noStroke();

  for(var i = 0; i < snowQuantity; i++) {
    flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
    xPositionSnow[i] = random(0, width);
    yPositionSnow[i] = random(0, height);
    directionSnow[i] = round(random(0, 1));
     rotationSnow[i] = random(0,360);
  }

  //rain setup
  for(var i = 0; i < rainQuantity; i++) {
    dropSize[i] = round(random(minDropSize, maxDropSize));
    xPositionRain[i] = random(0, width);
    yPositionRain[i] = random(0, height);
    directionRain[i] = round(random(0, 1)+0);
    rotationRain[i] = 180;
}



  /* c1 = color('hsb(' + farbton + ',100%, 20%)');
   c2 = color('hsb(' + farbton + ',100%, 44%)');
   c3 = color('hsb(' + farbton + ',100%, 58%)');
   c4 = color('hsb(' + farbton + ',100%, 72%)');
   c5 = color('hsb(' + farbton + ',60%, 86%)');
   c6 = color('hsb(' + farbton + ',40%, 100%)');*/

  colorMode(HSB);
  /*c1 = color(farbton, 100, 20, 1);
  c2 = color(farbton, 100, 44, 1);
  c3 = color(farbton, 100, 58, 1);
  c4 = color(farbton, 100, 72, 1);
  c5 = color(farbton, 60, 86, 1);
  c6 = color(farbton, 40, 100, 1);*/



}


function draw() {

  snowQuan = sliderSnow.value();
  snowQuantity = snowQuan;

  rainQuan = sliderRain.value();
  rainQuantity = rainQuan;




  farbton = 196;
//  farbton = map(mouseX, 0, width, 0, 360);

  c1 = color(farbton, 100, 20, 1);
  c2 = color(farbton, 100, 44, 1);
  c3 = color(farbton, 100, 58, 1);
  c4 = color(farbton, 100, 72, 1);
  c5 = color(farbton, 60, 86, 1);
  c6 = color(farbton, 40, 100, 1);
  c7 = color(farbton, 10, 90, 1);

  background(c7);


  noStroke();

  //den aktuellen farbton bei allen farben setzen
  for (var i = 0; i < colors.length; i++) {
    colors[i].h = farbton;
  }


  for (var i = 0; i < triangles.length; i++) {
    var t = triangles[i];
    //var c = t[3];
    var c = colors[i];

    var currColor = color(c.h, c.s, c.l, 1);
    //stroke(0);
    //strokeWeight(0.2);
    noStroke();
    fill(currColor);
    beginShape(TRIANGLES);
    vertex(t[0].x, t[0].y);
    vertex(t[1].x, t[1].y);
    vertex(t[2].x, t[2].y);
    endShape();
  }
  //snow draw
    drawSnow();

//rain draw
    drawRain();

}

function drawSnow() {
	for(var i = 0; i < xPositionSnow.length; i++) {
    noStroke();
    fill(255);
    //ellipse(xPositionSnow[i], yPositionSnow[i], flakeSize[i], flakeSize[i]);
    push();
    translate(xPositionSnow[i],yPositionSnow[i]);
    rotate(radians(rotationSnow[i]));
    beginShape();
    vertex(0,0);
    vertex(flakeSize[i],0);
    vertex(flakeSize[i]/2,flakeSize[i]*0.86604);
    endShape(CLOSE);
    pop();

    if(directionSnow[i] == 0) {
      xPositionSnow[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .7);
    } else {
      xPositionSnow[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .7);
    }

    yPositionSnow[i] += flakeSize[i] + directionSnow[i];

    if(xPositionSnow[i] > width + flakeSize[i] || xPositionSnow[i] < -flakeSize[i] || yPositionSnow[i] > height + flakeSize[i]) {
      xPositionSnow[i] = random(0, width);
      yPositionSnow[i] = -flakeSize[i];
    }
  }
}

function drawRain() {
  for(var i = 0; i < xPositionRain.length; i++) {
    noStroke();
    fill(c5);
    //ellipse(xPositionRain[i], yPositionRain[i], dropSize[i], dropSize[i]);
    push();
    translate(xPositionRain[i],yPositionRain[i]);
    rotate(radians(rotationRain[i]));
    beginShape();
    vertex(0,0);
    vertex(dropSize[i],0);
    vertex(dropSize[i]/2,dropSize[i]*0.86604);
    endShape(CLOSE);
    pop();

    if(directionRain[i] == 0) {
      xPositionRain[i] += map(dropSize[i], minDropSize, maxDropSize, .1, .7);
    } else {
      xPositionRain[i] -= map(dropSize[i], minDropSize, maxDropSize, .1, .7);
    }

    yPositionRain[i] += dropSize[i] + directionRain[i]+5;

    if(xPositionRain[i] > width + dropSize[i] || xPositionRain[i] < -dropSize[i] || yPositionRain[i] > height + dropSize[i]) {
      xPositionRain[i] = random(0, width);
      yPositionRain[i] = -dropSize[i];
    }
  }
}
