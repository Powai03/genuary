// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------
// JAN. 24 : Perfectionist’s nightmare (Ligne presque droite cassée)
function setup() {
  INIT2(720); LPRINT("M0,360D360,360M361,362D720,362");
  TRACE2();
}