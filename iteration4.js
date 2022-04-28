let table;
let boxSize = 1000;
let nftX = -150;
let nftY = 0;
let nftZ = 0;
let nftwidth = 50;
let nftheight = 50;
let nfts = [];


function preload() {
  table = loadTable(
    "nft.csv",
    "csv",
    "header"
  );
  nfts[0] = loadImage('nft/1.jpg');
  nfts[1] = loadImage('nft/2.png');
  nfts[2] = loadImage('nft/3.jpeg');
  nfts[3] = loadImage('nft/4.jpeg');
  nfts[4] = loadImage('nft/5.jpeg');
  nfts[5] = loadImage('nft/6.png');
  nfts[6] = loadImage('nft/7.png');
  nfts[7] = loadImage('nft/8.png');
  nfts[8] = loadImage('nft/9.jpeg');
  nfts[9] = loadImage('nft/10.png');
  nfts[10] = loadImage('nft/11.png');
  nfts[11] = loadImage('nft/12.jpg');
  nfts[12] = loadImage('nft/13.jpeg');
  nfts[13] = loadImage('nft/14.jpeg');
  nfts[14] = loadImage('nft/15.jpeg');
  nfts[15] = loadImage('nft/16.jpg');
  nfts[16] = loadImage('nft/17.jpeg');
  nfts[17] = loadImage('nft/18.png');
  nfts[18] = loadImage('nft/19.jpeg');
  nfts[19] = loadImage('nft/20.jpeg');
  nfts[20] = loadImage('nft/21.jpg');
  nfts[21] = loadImage('nft/22.jpeg');
  nfts[22] = loadImage('nft/23.jpeg');
  nfts[23] = loadImage('nft/24.jpeg');
  nfts[24] = loadImage('nft/25.jpeg');
  nfts[25] = loadImage('nft/26.jpeg');
  nfts[26] = loadImage('nft/27.jpeg');
  nfts[27] = loadImage('nft/28.jpeg');
  nfts[28] = loadImage('nft/29.png');
  nfts[29] = loadImage('nft/30.png');
  bg = loadImage('assets/background.png');
  myFont = loadFont('assets/myfont.ttf');
}

function setup() {
  cnv = createCanvas(600, 550, WEBGL);
  cnv.parent('sketch-holder');
  createEasyCam();
  textureWrap(CLAMP);
  //count the columns
  print(table.getRowCount() + " total rows in table");
  print(table.getColumnCount() + " total columns in table");
  print(table.getColumn("name"));
  
}

function draw() {
  
  background('grey');
  lights();
  box(boxSize);
  texture(bg);
  //noFill();
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  
  for (let r = 0; r < 14; r++){
    push();
    noStroke();
    translate(nftX+r*50, nftY);
    
    texture(nfts[r]);
    box(table.getNum(r, 3), table.getNum(r, 3));
    let g = table.getNum(r,3)*5;
    let c = color(0, g, 0);
    fill(c);
    textSize(table.getNum(r, 3));
    textFont(myFont);
    //rotateZ(120);
    rotateY(90);
    text(table.getString(r, 1),0,-50);
    text(table.getString(r, 5),0,50);
    pop();
  }
  
  for (let r = 7; r < 21; r++){
    push();
    rotateY(90);
    translate(100, 150,150);
    noStroke();
    translate(nftX+r*50-700, nftY);
    
    texture(nfts[r]);
    box(table.getNum(r, 3), table.getNum(r, 3));
    let g = table.getNum(r,3)*5;
    let c = color(0, g, 0);
    fill(c);
    textSize(table.getNum(r, 3));
    textFont(myFont);
    //rotateZ(120);
    rotateY(90);
    text(table.getString(r, 1),0,-50);
    text(table.getString(r, 5),0,50);
    pop();
  }
  
  for (let r = 14; r < 29; r++){
    push();
    rotateY(-90);
    translate(-100, -150,-150);
    noStroke();
    translate(nftX+r*50-900, nftY);
    texture(nfts[r]);
    box(table.getNum(r, 3), table.getNum(r, 3));
    let g = table.getNum(r,3)*5;
    let c = color(0, g, 0);
    fill(c);
    textSize(table.getNum(r, 3));
    textFont(myFont);
    //rotateZ(120);
    rotateY(90);
    text(table.getString(r, 1),0,-50);
    text(table.getString(r, 5),0,50);
    pop();
  }
  
}
