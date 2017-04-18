//Kommentar von Christian
//Define points
  var p1 = {
    x: 269.418,
    y: 55.818
  };
  
  var p2 = {
    x: 303.776, 
    y: 67.126
  };
  
  var p3 = {
    x: 331.132, 
    y: 96.824
  };
  
  var p4 = {
    x: 357.993, 
    y: 106.105
  };
  
  var p5 = {
    x: 373.4033, 
    y: 142.708
  };
  
  var p6 = {
    x: 394.821, 
    y: 179.004
  };
  
  var p7 = {
    x: 389.388,
    y: 204.5
  };
  
  var p8 = {
    x: 413,
    y: 211.211
  };
  
  var p9 = {
    x: 413.193,
    y: 224.665
  };
  
  var p10 = {
    x: 433.749,
    y: 238.281
  };
  
  var p11 = {
    x: 451.669,
    y: 232.528
  };
  
  var p12 = {
    x: 467.289,
    y: 241.865
  };
  
  var p13 = {
    x: 525.32,
    y: 320.088
  };
  
  var p14 = {
    x: 548.634,
    y: 343.847
  };
  
  var p15 = {
    x: 477.1,
    y: 343.847
  };
  
  var p16 = {
    x: 378.697,
    y: 343.847
  };
  
  var p17 = {
    x: 327.369,
    y: 343.847
  };
  
  var p18 = {
    x: 258.054,
    y: 343.847
  };
  
  var p19 = {
    x: 211.404,
    y: 343.847
  };
  
  var p20 = {
    x: 167.582,
    y: 343.847
  };
  
  var p21 = {
    x: 92.411,
    y: 343.847
  };
  
  var p22 = {
    x: 58,
    y: 343.847
  };
  
  var p23 = {
    x: 92.411,
    y: 280.274
  };
  
  var p24 = {
    x: 187.137,
    y: 211.14
  };
  
  var p25 = {
    x: 199.633,
    y: 181.982
  };
  
  var p26 = {
    x: 202.609,
    y: 142.704
  };
  
  var p27 = {
    x: 223.436,
    y: 135.559
  };
  
  var p28 = {
    x: 227.601,
    y: 124.849
  }; 
  
  var p29 = {
    x: 237.718,
    y: 120.686
  }; 

  var p30 = {
    x: 240.103,
    y: 91.526
  };
  
  var p31 = {
    x: 311.291,
    y: 90.773
  };
  
  var p32 = {
    x: 265.339,
    y: 119.397
  };
  
  var p33 = {
    x: 313.054,
    y: 117.168
  };
  
  var p34 = {
    x: 268.243,
    y: 126.368
  };
  
  var p35 = {
    x: 283.627,
    y: 168.498
  };
  
  var p36 = {
    x: 229.18,
    y: 207.329
  };
  
  var p37 = {
    x: 290.771,
    y: 216.7
  };
  
  var p38 = {
    x: 225.609,
    y: 256.17
  }; 
  
  var p39 = {
    x: 259.817,
    y: 248.645
  }; 

  var p40 = {
    x: 335.832,
    y: 264.781
  };
  
  var p41 = {
    x: 424.575,
    y: 270.602
  };
  
  var p42 = {
    x: 463.165,
    y: 256.907
  };
  
  var p43 = {
    x: 451.146,
    y: 300.861
  };
  
  var p44 = {
    x: 482.58,
    y: 327.871
  };
  
  var p45 = {
    x: 428.073,
    y: 314.542
  };
  
  var p46 = {
    x: 394.821,
    y: 318.104
  };
  
  var p47 = {
    x: 368.202,
    y: 328.367
  };
  
  var p48 = {
    x: 351.845,
    y: 296.223
  }; 
  
  var p49 = {
    x: 312.725,
    y: 287.611
  }; 

  var p50 = {
    x: 296.051,
    y: 275.332
  };
  
  var p51 = {
    x: 299.334,
    y: 302.018
  };
  
  var p52 = {
    x: 269.418,
    y: 332.546
  };
  
  var p53 = {
    x: 147.524,
    y: 307.569
  };
  
  var p54 = {
    x: 126.6,
    y: 295.72
  };
  
  var p55 = {
    x: 411.482,
    y: 291.502
  }
  
  var p56 = {
    x: 421.756,
    y: 287.611
  }
  



function setup() {
  createCanvas(600,400);
  background(255);
  var farbton = 196;
  //var farbton = map(mouseX, 0, width, 0, 360);

  
  
  // Define colors
  c1 = color('hsb('+farbton+',100%, 20%)');
  c2 = color('hsb('+farbton+',100%, 44%)');
  c3 = color('hsb('+farbton+',100%, 58%)');
  c4 = color('hsb('+farbton+',100%, 72%)');
  c5 = color('hsb('+farbton+',60%, 86%)');
  c6 = color('hsb('+farbton+',40%, 100%)');
  }

function draw(){

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

