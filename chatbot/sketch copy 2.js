// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------
// JAN. 2 : Animation (Squash & Stretch - à mettre dans DRAW)
function draw() {
  INIT2(720); let s = 1 + 0.2*sin(frameCount*0.1);
  for (let I=0; I<1000; I++) {
    let AN=2*PI*I/1000;
    X=360+150*cos(AN); Y=(360+150*sin(AN))*s;
    if (I==0) LPRINT(`M${int(X)},${int(Y)}`); else LPRINT(`D${int(X)},${int(Y)}`);
  }
  TRACE2();
}