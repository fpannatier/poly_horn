var buttonVi;
var buttonRo;
var buttonGo;
var buttonKl;


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



//hier kannst du die farben per triangle setzen
var colorsVi = [c3, c3, c2, c1, c1, c5, c3, c4, c4, c5, c3, c5, c1, c2, c3, c4, c5, c1, c3, c4, c5, c2, c5, c2, c4, c1, c2, c1, c2, c3, c1, c3, c3, c2, c1, c2, c1, c2, c2, c2, c1, c1, c2, c4, c1, c2, c2, c2, c1, c5, c2, c2, c1, c3, c2, c1, c3, c2, c1, c2, c2];
var colorsRo = [c2, c1, c3, c5, c3, c4, c5, c2, c2, c4, c3, c2, c4, c1, c2, c4, c5, c1, c2, c1, c2, c1, c5, c2, c1, c2, c2, c4, c3, c5, c1, c5, c4, c3, c5, c3, c4, c1, c1, c4, c3, c2, c4, c4, c4, c1, c2, c5, c4, c5, c4, c5, c4, c1, c2, c3, c1, c2, c2, c3, c4, c3, c2, c1, c2,c5];
var colorsGo = [c1, c2, c3, c2, c1, c3, c3, c3, c2, c4, c3, c5, c1, c2, c1, c5, c4, c5, c4, c4, c3, c3, c4, c5, c3, c2, c1, c5, c4, c5, c3, c4, c5, c4, c5, c4, c2, c1, c4, c2, c1, c2, c5, c1, c2, c1, c4, c3, c3, c4, c4, c5, c4, c3, c5, c1, c5, c2, c2, c1, c3, c5, c4, c2, c2, c4, c5, c4, c1, c2, c4, c3, c4, c2, c3, c1, c1, c1, c2, c3, c2, c3, c5, c4, c3, c5, c2, c2, c1, c2, c1, c2];
var colorsKl = [c2, c1, c5, c2, c3, c4, c5, c4, c1, c5, c1, c2, c3, c1, c4, c3, c1, c2, c3, c2, c1, c3, c2, c1, c3, c3, c2, c5, c3, c1, c2, c2, c2, c2, c1, c2, c3, c1, c5, c4, c3, c4, c5, c2, c3, c2, c3, c3, c3, c2, c1, c2, c3, c1, c2, c3, c1, c3, c5, c5, c1, c2, c3, c3, c4, c4, c5, c4, c3, c5, c3, c4,c5];

var ro = {
  triangles: trianglesRo,
  colors: colorsRo
};

var kl = {
  triangles: trianglesKl,
  colors: colorsKl
};

var go = {
  triangles: trianglesGo,
  colors: colorsGo
};

var vi = {
  triangles: trianglesVi,
  colors: colorsVi
};

var perspectives = [vi, ro, go, kl];

//hier kannst du die entsprechende perspektive setzen
var perspIndex = 0;

function setup() {
  createCanvas(600, 400);
  textFont('Arial');
  var hulu = createP('Perspektive wählen:');
  hulu.position(56+25,340);
  background(255);
  buttonVi = createButton('Zermatt');
  buttonVi.position(195+25,356);
  buttonRo = createButton('Rothorn');
  buttonRo.position(255+25,356);
  buttonGo = createButton('Gornergrat');
  buttonGo.position(315+25,356);
  buttonKl = createButton('Klein Matterhorn');
  buttonKl.position(391+25,356);
  buttonVi.mousePressed(village);
  buttonRo.mousePressed(rothorn);
  buttonGo.mousePressed(gornergrat);
  buttonKl.mousePressed(klMatterhorn);

  function village() {
    perspIndex = 0;
  }
  function rothorn() {
    perspIndex = 1;
  }
  function gornergrat() {
    perspIndex = 2;
  }
  function klMatterhorn() {
    perspIndex = 3;
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


//console.log(view);

}


function draw() {
  background(255);




  farbton = 196;
  //farbton = map(mouseX, 0, width, 0, 360);

  c1 = color(farbton, 100, 20, 1);
  c2 = color(farbton, 100, 44, 1);
  c3 = color(farbton, 100, 58, 1);
  c4 = color(farbton, 100, 72, 1);
  c5 = color(farbton, 60, 86, 1);
  c6 = color(farbton, 40, 100, 1);
  c7 = color(farbton, 50, 90, 1);




  noStroke();

  var perspective = perspectives[perspIndex];
  var colors = perspective.colors;
  var triangles = perspective.triangles;

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



}
