function setup() {
    createCanvas(800, 800);
    
}

function draw() {
  var colorR = 91
  var colorG = 7
  var colorB = 29
  var newColor = map(mouseX, 0, width, 0, 255);
  var circleX = 400
    var circleY = 325
    var window = 25 
    var windowBig = 50
    background(newColor, colorG, colorB);
    strokeWeight(0);
    fill(121,11,44);
    ellipse(circleX,circleY,650,650);
    fill(161,13,53);
    ellipse(circleX,circleY,400,400);
    fill(255,81,127);
    ellipse(circleX,circleY,250,250);
    fill(61, 11, 25);
    rect(300,400,200,400);
    rect(325,350,150,50);
    triangle(400,220,375,400,425,400);
    fill(161,13,53);
    rect(333,430,window,window);
    rect(388,430,window,window);
    rect(443,430,window,window);
    rect(333,480,window,window);
    rect(388,480,window,window);
    rect(443,480,window,window);
    rect(333,530,window,window);
    rect(388,530,window,window);
    rect(443,530,window,window);
    rect(333,580,window,window);
    rect(388,580,window,window);
    rect(443,580,window,window);
    rect(333,630,window,window);
    rect(388,630,window,window);
    rect(443,630,window,window);
    rect(333,680,window,window);
    rect(388,680,window,window);
    rect(443,680,window,window);
    rect(333,730,window,window);
    rect(388,730,window,window);
    rect(443,730,window,window);
    rect(333,780,window,window);
    rect(388,780,window,window);
    rect(443,780,window,window);
    fill(23, 4, 9);
    rect(480,550,250,250);
    rect(470,530,270,20);
    ellipse(605,530,230,230);
    rect(70,550,250,250);
    triangle(70,550,320,550,70,400);
    fill(255,81,127);
    rect(530,580,windowBig,windowBig);
    rect(630,580,windowBig,windowBig);
    rect(530,670,windowBig,windowBig);
    rect(630,670,windowBig,windowBig);
    rect(530,760,windowBig,windowBig);
    rect(630,760,windowBig,windowBig);
    rect(120,580,windowBig,windowBig);
    rect(220,580,windowBig,windowBig);
    rect(120,670,windowBig,windowBig);
    rect(220,670,windowBig,windowBig);
    rect(120,760,windowBig,windowBig);
    rect(220,760,windowBig,windowBig);
    fill(247, 215, 224);
    textSize(20);
    text('L.Peters',710,780);
}