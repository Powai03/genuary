// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------
// JAN. 6 : Lights on/off (Couleur dépendante de la souris)
function draw() {
  INIT2(720); let c = mouseX > 360 ? 255 : 0; background(255-c); stroke(c);
  for (let I=0; I<N; I++) {
    let AN=2*PI*I/N;
    X=360+R1*cos(AN); Y=360+R1*sin(AN);
    if (I==0) LPRINT(`M${int(X)},${int(Y)}`); else LPRINT(`D${int(X)},${int(Y)}`);
  }
  TRACE2();
}