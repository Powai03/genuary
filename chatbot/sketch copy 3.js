// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------
// JAN. 3 : Fibonacci forever (Angle d'or 137.5°)
function setup() {
  INIT2(720);
  for (let I=0; I<1000; I++) {
    let AN=I*2.3999; let R=sqrt(I)*10;
    X=360+R*cos(AN); Y=360+R*sin(AN);
    LPRINT(`M${int(X)},${int(Y)}`); LPRINT(`D${int(X+2)},${int(Y+2)}`);
  }
  TRACE2();
}