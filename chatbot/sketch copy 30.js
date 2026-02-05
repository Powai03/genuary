// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------
// JAN. 30 : It's not a bug, it's a feature (Dépassement de coordonnées)
function setup() {
  INIT2(720);
  for(let i=0; i<1000; i++) LPRINT(`M${i*10},0D${i*10},720`); // Les traits sortent du cadre
  TRACE2();
}