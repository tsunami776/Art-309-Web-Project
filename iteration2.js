let cam;
let img;

function preload() {
  img = loadImage('assets/the-matrix.jpg');
}
function setup() {
  var cnv = createCanvas(600, 500);
  cam=createCapture(VIDEO);
  background(0);
  cnv.parent('sketch-holder');

}
function draw() {
    for(let i=0;i<100;i++){
    var x= random(width);
    var y=random(height);
    var h=random(20,40);
    var c=cam.get(x,y);
    noStroke();
    fill(c);
    rect(x,y,5,h);
  }
  image(img, 0, 0);
  tint(255, 5);
}