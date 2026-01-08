// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------
// JAN. 12 : Boxes only (Uniquement des carrés)
function setup() {
  INIT2(720);
  for (let I=0; I<100; I++) {
    X=random(720); Y=random(720);
    LPRINT(`M${int(X)},${int(Y)}D${int(X+20)},${int(Y)}D${int(X+20)},${int(Y+20)}D${int(X)},${int(Y+20)}D${int(X)},${int(Y)}`);
  }
  TRACE2();
}