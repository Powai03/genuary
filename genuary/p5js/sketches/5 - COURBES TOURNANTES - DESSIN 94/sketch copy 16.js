// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------
// JAN. 16 : Order and disorder (Moitié propre, moitié bruitée)
function setup() {
  INIT2(720);
  for (let I=0; I<1000; I++) {
    X=(I/1000)*720; Y=360 + (I > 500 ? random(-50,50) : 0);
    if (I==0) LPRINT(`M${int(X)},${int(Y)}`); else LPRINT(`D${int(X)},${int(Y)}`);
  }
  TRACE2();
}