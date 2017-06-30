//snow variables
var snowQuantity = 400
var xPosition = [];
var yPosition = [];
var flakeSize = [];
var direction = [];
var rotation = [];
var minFlakeSize = 1;
var maxFlakeSize = 7;
var snowColor = 255;

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
  sliderRain = createSlider(0,100,50);
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
    xPosition[i] = random(0, width);
    yPosition[i] = random(0, height);
    direction[i] = round(random(0, 1));
     rotation[i] = random(0,360);

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

  var sliderSnowValue = sliderSnow.value();
  snowQuantity = sliderSnowValue;
  console.log(sliderSnowValue);



  farbton = 196;
//  farbton = map(mouseX, 0, width, 0, 360);

  c1 = color(farbton, 100, 20, 1);
  c2 = color(farbton, 100, 44, 1);
  c3 = color(farbton, 100, 58, 1);
  c4 = color(farbton, 100, 72, 1);
  c5 = color(farbton, 60, 86, 1);
  c6 = color(farbton, 40, 100, 1);
  c7 = color(farbton, 50, 90, 1);

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


}

function drawSnow() {
	for(var i = 0; i < xPosition.length; i++) {
    noStroke();
    fill(255);
    //ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);
    push();
    translate(xPosition[i],yPosition[i]);
    rotate(radians(rotation[i]));
    beginShape();
    vertex(0,0);
    vertex(flakeSize[i],0);
    vertex(flakeSize[i]/2,flakeSize[i]*0.86604);
    endShape(CLOSE);
    pop();

    if(direction[i] == 0) {
      xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .7);
    } else {
      xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .7);
    }

    yPosition[i] += flakeSize[i] + direction[i];

    if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
      xPosition[i] = random(0, width);
      yPosition[i] = -flakeSize[i];
    }
  }
}
