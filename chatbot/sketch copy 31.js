// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------
// JAN. 31 : GLSL day (Sphere 3D via WEBGL)
function setup() {
  createCanvas(720, 720, WEBGL);
}
function draw() {
  background(0); normalMaterial(); rotateY(frameCount*0.01); sphere(150);
}