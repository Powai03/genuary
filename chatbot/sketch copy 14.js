// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------
// JAN. 14 : Everything fits perfectly (Grille complète)
function setup() {
  INIT2(720);
  for(let x=0; x<720; x+=40) {
    for(let y=0; y<720; y+=40) LPRINT(`M${x},${y}D${x+40},${y}D${x+40},${y+40}`);
  }
  TRACE2();
}