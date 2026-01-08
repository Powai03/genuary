// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------
// JAN. 10 : Polar coordinates (Rayons centraux)
function setup() {
  INIT2(720);
  for (let A=0; A<TWO_PI; A+=0.05) {
    let R = 200 + 50*sin(A*10);
    X=360+R*cos(A); Y=360+R*sin(A);
    LPRINT(`M360,360D${int(X)},${int(Y)}`);
  }
  TRACE2();
}