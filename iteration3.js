// Given the following google sheets file called "num friends"
// located in google drive:
//https://docs.google.com/spreadsheets/d/1whQIre2lqotOytS6OXkpgbMaCGPgU37HkDb69pCBcjM/edit?usp=sharing
//
// name, num
let table;

function preload() {
  //publish to web from google as a comma separated value "csv"
  table = loadTable(
    "assets/nft.csv",
    "csv",
    "header"
  );
}

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.parent('sketch-holder');
  textFont("Helvetica");
  //count the columns
  print(table.getRowCount() + " total rows in table");
  print(table.getColumnCount() + " total columns in table");
  print(table.getColumn("name"));
}

function draw() {
  background('lightgrey');
  for (let r = 0; r < table.getRowCount(); r++)
    for (let c = 0; c < table.getColumnCount(); c++) {
      let textsize = table.getNum(r, 3)*2.5;
      textsize = map(textsize, 0, 731, 0, 100);
      textSize(textsize);
      
      let f = map(table.getNum(r, 3), 0, 731, 0, 255);
      fill(f, table.getNum(r, 3)-50, table.getNum(r, 3), table.getNum(r, 3));
      text(table.getString(r, 1), 20+r*2, (height / table.getRowCount()) * r + 30);
      text(table.getString(r, 3), 400+r*1.5, (height / table.getRowCount()) * r + 30);
      text(table.getString(r, 5), 550+r*1.2, (height / table.getRowCount()) * r + 30);
      
    }
  push();
  translate(20, 200);
  rotate(PI/2.3);
  textSize(50);
  fill(199, 0, 57);
  text('NFT NAME', 0, 0);
  pop();
  
  push();
  translate(400, 350);
  rotate(PI/2.25);
  textSize(50);
  fill(89, 186, 52);
  text('PRICE', 0, 0);
  pop();
  
  push();
  translate(570, 470);
  rotate(PI/2.2);
  textSize(50);
  fill(203, 209, 45);
  text('YEAR', 0, 0);
  pop();
  
}
