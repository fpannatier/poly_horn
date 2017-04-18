var c1, c2, c3, c4, c5, c6;

function setup() {
  createCanvas(600, 400);
  background(255);
  var farbton = 196;


  //Falls du das im draw machst anstatt in setup, so kannst du den farbton dann wohl einfach mit
  //mouseX steuern.

  c1 = color('hsb(' + farbton + ',100%, 20%)');
  c2 = color('hsb(' + farbton + ',100%, 44%)');
  c3 = color('hsb(' + farbton + ',100%, 58%)');
  c4 = color('hsb(' + farbton + ',100%, 72%)');
  c5 = color('hsb(' + farbton + ',60%, 86%)');
  c6 = color('hsb(' + farbton + ',40%, 100%)');
}


function draw() {

  farbton = map(mouseX, 0, width, 0, 255);



  c1 = color(farbton, 0, 0);
  c2 = color(0, farbton, 0);
  c3 = color(0, 0, farbton);
  /* c4 = color('hsb('+farbton+',100%, 72%)');
   c5 = color('hsb('+farbton+',60%, 86%)');
   c6 = color('hsb('+farbton+',40%, 100%)');*/


  noStroke();

  fill(c4);
  triangle(p1.x, p1.y, p33.x, p33.y, p30.x, p30.y);
  fill(c2);
  triangle(p1.x, p1.y, p31.x, p31.y, p33.x, p33.y);
  fill(c3);
  triangle(p1.x, p1.y, p2.x, p2.y, p5.x, p5.y);
  fill(c6);
  triangle(p30.x, p30.y, p33.x, p33.y, p32.x, p32.y);
  fill(c1);
  triangle(p31.x, p31.y, p5.x, p5.y, p33.x, p33.y);
  fill(c1);
  triangle(p3.x, p3.y, p4.x, p4.y, p5.x, p5.y);
  fill(c4);
  triangle(p30.x, p30.y, p32.x, p32.y, p29.x, p29.y);
  fill(c5);
  quad(p29.x, p29.y, p33.x, p33.y, p27.x, p27.y, p28.x, p28.y);
  fill(c6);
  triangle(p26.x, p26.y, p27.x, p27.y, p35.x, p35.y);
  fill(c4);
  triangle(p27.x, p27.y, p34.x, p34.y, p35.x, p35.y);
  fill(c6);
  triangle(p34.x, p34.y, p33.x, p33.y, p35.x, p35.y);
  fill(c1);
  triangle(p33.x, p33.y, p40.x, p40.y, p35.x, p35.y);
  fill(c2);
  triangle(p33.x, p33.y, p5.x, p5.y, p40.x, p40.y);
  fill(c1);
  triangle(p5.x, p5.y, p6.x, p6.y, p40.x, p40.y);
  fill(c4);
  triangle(p26.x, p26.y, p35.x, p35.y, p25.x, p25.y);
  fill(c5);
  triangle(p25.x, p25.y, p35.x, p35.y, p36.x, p36.y);
  fill(c6);
  triangle(p25.x, p25.y, p36.x, p36.y, p24.x, p24.y);
  fill(c4);
  triangle(p35.x, p35.y, p38.x, p38.y, p36.x, p36.y);
  fill(c6);
  triangle(p35.x, p35.y, p37.x, p37.y, p38.x, p38.y);
  fill(c2);
  triangle(p35.x, p35.y, p40.x, p40.y, p37.x, p37.y);
  fill(c2);
  triangle(p6.x, p6.y, p7.x, p7.y, p40.x, p40.y);
  fill(c1);
  triangle(p7.x, p7.y, p8.x, p8.y, p9.x, p9.y);
  fill(c1);
  triangle(p9.x, p9.y, p10.x, p10.y, p41.x, p41.y);
  fill(c2);
  triangle(p7.x, p7.y, p9.x, p9.y, p41.x, p41.y);
  fill(c5);
  triangle(p24.x, p24.y, p36.x, p36.y, p21.x, p21.y);
  fill(c1);
  triangle(p37.x, p37.y, p40.x, p40.y, p47.x, p47.y);
  fill(c3);
  triangle(p7.x, p7.y, p48.x, p48.y, p40.x, p40.y);
  fill(c4);
  quad(p7.x, p7.y, p46.x, p46.y, p47.x, p47.y, p48.x, p48.y);
  fill(c1);
  triangle(p7.x, p7.y, p55.x, p55.y, p46.x, p46.y);
  fill(c3);
  triangle(p7.x, p7.y, p41.x, p41.y, p55.x, p55.y);
  fill(c4);
  triangle(p24.x, p24.y, p54.x, p54.y, p23.x, p23.y);
  fill(c6);
  triangle(p36.x, p36.y, p38.x, p38.y, p21.x, p21.y);
  fill(c3);
  triangle(p23.x, p23.y, p54.x, p54.y, p21.x, p21.y);
  fill(c2);
  triangle(p23.x, p23.y, p21.x, p21.y, p22.x, p22.y);
  fill(c5);
  triangle(p37.x, p37.y, p20.x, p20.y, p38.x, p38.y);
  fill(c1);
  triangle(p37.x, p37.y, p50.x, p50.y, p39.x, p39.y);
  fill(c2);
  triangle(p37.x, p37.y, p47.x, p47.y, p50.x, p50.y);
  fill(c3);
  triangle(p39.x, p39.y, p49.x, p49.y, p51.x, p51.y);
  fill(c1);
  triangle(p39.x, p39.y, p51.x, p51.y, p52.x, p52.y);
  fill(c2);
  triangle(p10.x, p10.y, p11.x, p11.y, p41.x, p41.y);
  fill(c2);
  triangle(p11.x, p11.y, p12.x, p12.y, p43.x, p43.y);
  fill(c1);
  quad(p11.x, p11.y, p56.x, p56.y, p16.x, p16.y, p41.x, p41.y);
  fill(c3);
  triangle(p11.x, p11.y, p43.x, p43.y, p56.x, p56.y);
  fill(c3);
  triangle(p12.x, p12.y, p13.x, p13.y, p42.x, p42.y);
  fill(c1);
  triangle(p42.x, p42.y, p44.x, p44.y, p43.x, p43.y);
  fill(c5);
  triangle(p42.x, p42.y, p14.x, p14.y, p44.x, p44.y);
  fill(c2);
  triangle(p56.x, p56.y, p43.x, p43.y, p16.x, p16.y);
  fill(c3);
  triangle(p45.x, p45.y, p43.x, p43.y, p44.x, p44.y);
  fill(c1);
  triangle(p49.x, p49.y, p47.x, p47.y, p17.x, p17.y);
  fill(c4);
  triangle(p38.x, p38.y, p20.x, p20.y, p53.x, p53.y);
  fill(c1);
  triangle(p45.x, p45.y, p14.x, p14.y, p15.x, p15.y);
  fill(c6);
  triangle(p39.x, p39.y, p19.x, p19.y, p20.x, p20.y);
  fill(c2);
  quad(p39.x, p39.y, p52.x, p52.y, p18.x, p18.y, p19.x, p19.y);
  fill(c3);
  triangle(p53.x, p53.y, p20.x, p20.y, p21.x, p21.y);
  fill(c2);
  triangle(p49.x, p49.y, p17.x, p17.y, p18.x, p18.y);
  fill(c3);
  triangle(p46.x, p46.y, p16.x, p16.y, p17.x, p17.y);
  fill(c3);
  triangle(p45.x, p45.y, p15.x, p15.y, p16.x, p16.y);

}