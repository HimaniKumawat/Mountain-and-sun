var i=0;
var c=0;
var colorsPalette;
function setup() {
  cnv = createCanvas(600, 400);

  background(255,253,208);
  noFill();
  stroke(255);
  rect(0,0,width,height)
   // colorsPalette = [color(253,242,214),
   //          color(249,220,195),
   //          color(255,221,145),
   //          // color(219,175,15),
   //          color(195,205,230),
   //          color(40,46,84),];

  colorsPalette = [
    // color(255,161,126),
            color(249, 237, 212),
            color(255,227,159),
            // color(219,175,15),
            color(255, 211, 174),
            color(255, 182, 173),
            color(254, 151, 116),];
}

function draw() {
  frameRate(10);

  push();
  stroke(255);
  fill(255, 254, 242,60);
  rect(0,0,width,height)
  pop();

  push();
  for(let xpos =105; xpos <= width-90; xpos +=90){
    for(let ypos = 90; ypos <= height -70; ypos +=60){
    // stroke(255,50);

      push();
      var x = tan(radians(i*4));
      var y = tan(radians(i));
      noStroke();
      fill(colorsPalette[c]);
      circle(xpos+x+5,ypos+y-19,10);
      pop();
      c=c+1
      if(c==5){c=0}

      stroke(8, 24, 58);
      strokeWeight(1.2);
      noFill(8, 24, 58);
      triangle(xpos+20, ypos-15, xpos-30, ypos, xpos+40, ypos+10);

    }
  }
  pop();
  i=i+2;
}

function keyTyped() {
  if (key === 's') {
    save(cnv, 'myCanvas.jpg');
  }
}
