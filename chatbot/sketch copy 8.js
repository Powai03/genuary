// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------
// JAN. 8 : A City (Rectangles basés sur X)
function setup() {
  INIT2(720);
  for (let I=0; I<100; I++) {
    X=I*7.2; Y=720-noise(I)*400;
    LPRINT(`M${int(X)},720D${int(X)},${int(Y)}D${int(X+5)},${int(Y)}D${int(X+5)},720`);
  }
  TRACE2();
}