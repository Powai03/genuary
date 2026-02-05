// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------

// JAN. 25 : Organic Geometry (Courbe tournante + Perlin Noise)
function setup() {
  INIT2(720);
  for (let I=0; I<1000; I++) {
    let AN=2*PI*I/1000; let R=150+noise(I*0.1)*100;
    X=360+R*cos(AN); Y=360+R*sin(AN);
    if (I==0) LPRINT(`M${int(X)},${int(Y)}`); else LPRINT(`D${int(X)},${int(Y)}`);
  }
  TRACE2();
}