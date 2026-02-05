// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------
// JAN. 15 : Invisible object (Seulement l'ombre décalée)
function setup() {
  INIT2(720); background(255); stroke(200);
  for (let I=0; I<500; I++) {
    let AN=2*PI*I/500; X=360+150*cos(AN)+20; Y=360+150*sin(AN)+20; // +20 pour l'ombre
    LPRINT(`M${int(X)},${int(Y)}D${int(X+1)},${int(Y+1)}`);
  }
  TRACE2();
}