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


//hier kannst du die farben per triangle setzen
var colors = [c1, c2, c3, c4, c5,c1, c2, c3, c4, c5,c1, c2, c3, c4, c5,c1, c2, c3, c4, c5,c1, c2, c3, c4, c5,c1, c2, c3, c4, c5,c1, c2, c3, c4, c5,c1, c2, c3, c4, c5,c1, c2, c3, c4, c5,c1, c2, c3, c4, c5,c1, c2, c3, c4, c5,c1, c2, c3, c4, c5,c1];

function setup() {
  createCanvas(600, 400);
  background(255);




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


console.log(colors.length, triangles.length);

}


function draw() {

  farbton = 196;
  farbton = map(mouseX, 0, width, 0, 360);

  c1 = color(farbton, 100, 20, 1);
  c2 = color(farbton, 100, 44, 1);
  c3 = color(farbton, 100, 58, 1);
  c4 = color(farbton, 100, 72, 1);
  c5 = color(farbton, 60, 86, 1);
  c6 = color(farbton, 40, 100, 1);

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
    stroke(0);
    strokeWeight(0.2);
    fill(currColor);
    beginShape(TRIANGLES);
    vertex(t[0].x, t[0].y);
    vertex(t[1].x, t[1].y);
    vertex(t[2].x, t[2].y);
    endShape();
  }


}