let r
let g
let b
let size
let tall
let wide

function setup() {
  createCanvas(400, 400);
  r = random(255)
  g = random(255)
  b = random(255)
  tall = random(height)
  wide = random (width)
}

function draw() {
  background(25,25,112);
  wide = wide+1
  
  fill(62,134,103)
  triangle(200,150,245,200,155,200)
  triangle(200,100,245,185,155,185)
  
  fill(135,113,74)
  rect(193,200,15,30)
  
  fill(r,g,b);
  circle(200,150,8)
  circle(203,135,8)
  circle(185,155,8)
  circle(188,140,8)
  circle(210,160,8)
  circle(213,145,8)
  circle(215,175,8)
  circle(180,175,8)
  circle(195,165,8)
  circle(198,176,8)
  circle(200,123,8)
  
  fill(255)
  circle(tall+10,wide+10,8)
  circle(tall+145,wide-70,8)
  circle(tall+23,wide-10,8)
  circle(tall+54,wide+30,8)
  circle(tall+118,wide-60,8)
  circle(tall-26,wide-80,8)
  circle(tall+35,wide+20,8)
  circle(tall+182,wide+120,8)
  circle(tall+67,wide-30,8)
  circle(tall+70,wide+40,8)
  circle(tall+80,wide-40,8)
  circle(tall+110,wide+60,8)
  circle(tall+90,wide+50,8)
  circle(tall+40,wide-20,8)
  circle(tall+180,wide+80,8)
  circle(tall-40,wide-90,8)
  circle(tall+100,wide-50,8)
  circle(tall+190,wide+110,8)
  circle(tall+130,wide+70,8)
  circle(tall-60,wide-100,8)
  circle(tall-30,wide+90,8)
  circle(tall+170,wide-110,8)
  circle(tall-50,wide+100,8)
}