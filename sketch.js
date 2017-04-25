var farbton = 196;
//h = hue, s = saturation, l = brightness
var colors = [{
  h: farbton,
  s: 20,
  l: 20
}, {
  h: farbton,
  s: 100,
  l: 44
}, {
  h: farbton,
  s: 100,
  l: 58
}, {
  h: farbton,
  s: 100,
  l: 72
}, {
  h: farbton,
  s: 60,
  l: 86
}, {
  h: farbton,
  s: 40,
  l: 100
}];

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
    
    //workaround, wenn das color array fertig ist, einfach die erste farbe nehmen
    if(c == null){
      c = colors[0];
    }
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