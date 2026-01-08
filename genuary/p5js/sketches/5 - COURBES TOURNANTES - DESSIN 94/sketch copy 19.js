// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------
// JAN. 19 : 16x16 (Résolution forcée)
function setup() {
  INIT2(16); // Petit canvas
  for(let i=0; i<16; i++) LPRINT(`M${i},0D${i},16`);
  TRACE2();
}