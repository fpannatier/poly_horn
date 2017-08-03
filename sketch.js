//snow variables
var snowQuan;
var snowQuantity = 1000;
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

var c4 = {
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

//cloud variables
var xPosition = -200;
var angle = 0.0;
var offset = 100;
var scalar = 5;
var velo = 0.01;

//an array to store multiple clouds
var clouds = [];
var nClounds = 20;


function setup() {
    createCanvas(600, 400);
    createP('Schnee').position(40, 400);
    sliderSnow = createSlider(0, snowQuantity, 0)
    sliderSnow.position(0, 440);
    createP('Regen').position(285, 400);
    sliderRain = createSlider(0, rainQuantity, 0);
    sliderRain.position(240, 440);
    createP('Wolken').position(510, 400);
    cloudSlider = createSlider(0, 25, 0);
    cloudSlider.position(470, 440);
    background(255);

    //snow setup
    frameRate(25);
    noStroke();

    for (var i = 0; i < snowQuantity; i++) {
        flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
        xPositionSnow[i] = random(0, width);
        yPositionSnow[i] = random(0, height);
        directionSnow[i] = round(random(0, 1));
        rotationSnow[i] = random(0, 360);
    }

    //rain setup
    for (var i = 0; i < rainQuantity; i++) {
        dropSize[i] = round(random(minDropSize, maxDropSize));
        xPositionRain[i] = random(0, width);
        yPositionRain[i] = random(0, height);
        directionRain[i] = round(random(0, 1) + 0);
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

    //cloud setup
    //create the clouds based on the points in points.js

    for(var i=0; i<nClounds; i++){
      //create a cloud object
      var cloud = {
        x: random(0,width), //0
        y: random(0,height),
        scale: random(0.2,1),
        speed: random(0.2,1),
        points: copyPointArray(points),
        cloudTriangles: cloudTriangles
      };

      var rand = 5;
      //slightly change the points so that cloud gets individual shape
      for(var j=0; j<cloud.points.length; j++){
        var p = cloud.points[j];
        p.x += random(-rand,rand);
        p.y += random(-rand,rand);
      }

      //print('cloud.points');
      //print(cloud.points);
      //print('cloud.cloudTriangles');
      //print(cloud.cloudTriangles);

      clouds.push(cloud);
    }
/*
    //Create a slider to adjust the clouds
    cloudSlider = createSlider(0,nClounds,10);
    cloudSlider.position(0,440);*/

}


function draw() {

    snowQuan = sliderSnow.value();
    //snowQuantity = snowQuan;


    rainQuan = sliderRain.value();
    //rainQuantity = rainQuan;




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
    drawSnow(snowQuan);

    //rain draw
    drawRain(rainQuan);

    //cloud draw
    //move the clounds
    for(var i=0; i<clouds.length; i++){
      var c = clouds[i];
      c.x += c.speed;

      //if the clouds goes out of the canvas on the right side
      //reset the position on the left side, so that the clouds go in a loop
      if(c.x>width){
        c.x = -200;
      }
    }


    //only display the number of clouds defined by the slider
    //and make sure we dont access indices which are larger that the cloud array
    var n = min(cloudSlider.value(),clouds.length);

    //draw the clouds
    for(var i=0; i<n; i++){
      var cloud = clouds[i];
      push();
      translate(cloud.x,cloud.y);
      scale(cloud.scale);
      var pts = cloud.points;
      var tris = cloud.cloudTriangles;
      for(var j=0; j<tris.length; j++){

       // print('triangles j: ' + j);
        var t = tris[j];

        var p1 = pts[t[0]];
        var p2 = pts[t[1]];
        var p3 = pts[t[2]];
        colorMode(RGB);
        stroke('white');
        strokeWeight(0.1);
        fill(255,255,255,170);
        beginShape(TRIANGLES);
        vertex(p1.x,p1.y);
        vertex(p2.x,p2.y);
        vertex(p3.x,p3.y);
        endShape();
      }

  /*    for(var j=0; j<pts.length; j++){
        var p = pts[j];
        ellipse(p.x,p.y,3,3);
      }
  */
      pop();
    }




}

function drawSnow(quantity) {
    //only draw the 'quantity' first snow flakes
    //dont display the others

    //make sure we dont try to access array idexes which dont exist
    var n = min(quantity, xPositionRain.length);

    for (var i = 0; i < n; i++) {
        noStroke();
        fill(255);
        //ellipse(xPositionSnow[i], yPositionSnow[i], flakeSize[i], flakeSize[i]);
        push();
        translate(xPositionSnow[i], yPositionSnow[i]);
        rotate(radians(rotationSnow[i]));
        beginShape();
        vertex(0, 0);
        vertex(flakeSize[i], 0);
        vertex(flakeSize[i] / 2, flakeSize[i] * 0.86604);
        endShape(CLOSE);
        pop();

        if (directionSnow[i] == 0) {
            xPositionSnow[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .7);
        } else {
            xPositionSnow[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .7);
        }

        yPositionSnow[i] += flakeSize[i] + directionSnow[i];

        if (xPositionSnow[i] > width + flakeSize[i] || xPositionSnow[i] < -flakeSize[i] || yPositionSnow[i] > height + flakeSize[i]) {
            xPositionSnow[i] = random(0, width);
            yPositionSnow[i] = -flakeSize[i];
        }
    }
}

function drawRain(quantity) {

    //only draw the 'quantity' first rain drops
    //dont display the others

    //make sure we dont try to access array idexes which dont exist
    var n = min(quantity, xPositionRain.length);

    for (var i = 0; i < n; i++) {
        noStroke();
        fill(c5);
        //ellipse(xPositionRain[i], yPositionRain[i], dropSize[i], dropSize[i]);
        push();
        translate(xPositionRain[i], yPositionRain[i]);
        rotate(radians(rotationRain[i]));
        beginShape();
        vertex(0, 0);
        vertex(dropSize[i], 0);
        vertex(dropSize[i] / 2, dropSize[i] * 0.86604);
        endShape(CLOSE);
        pop();

        if (directionRain[i] == 0) {
            xPositionRain[i] += map(dropSize[i], minDropSize, maxDropSize, .1, .7);
        } else {
            xPositionRain[i] -= map(dropSize[i], minDropSize, maxDropSize, .1, .7);
        }

        yPositionRain[i] += dropSize[i] + directionRain[i] + 5;

        if (xPositionRain[i] > width + dropSize[i] || xPositionRain[i] < -dropSize[i] || yPositionRain[i] > height + dropSize[i]) {
            xPositionRain[i] = random(0, width);
            yPositionRain[i] = -dropSize[i];
        }
    }
}
//makes a deep copy of a list of points
function copyPointArray(pts){
  var newArr = [];
  for(var i=0; i<pts.length; i++){
    var p = copyPoint(pts[i]);
    newArr.push(p);
  }
  return newArr;
}

function copyPoint(p){
  return {
    x: p.x,
    y: p.y
  };
}
