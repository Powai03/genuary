// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------
// JAN. 7 : Boolean algebra (Intersection de deux cercles)
function setup() {
  INIT2(720);
  for (let I=0; I<5000; I++) {
    let AN=2*PI*I/5000;
    let X=360+150*Math.cos(AN);
    let Y=360+150*Math.sin(AN);
    if (X > 360 && Y > 30) LPRINT(`M${Math.floor(X)},${Math.floor(Y)}D${Math.floor(X+1)},${Math.floor(Y+1)}`);
  }
  TRACE2();
}