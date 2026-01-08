// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------
// JAN. 26 : Recursive Grids
function recur(x, y, s) {
  LPRINT(`M${x},${y}D${x+s},${y}D${x+s},${y+s}D${x},${y+s}D${x},${y}`);
  if(s > 100) { recur(x, y, s/2); recur(x+s/2, y+s/2, s/2); }
}
function setup() { INIT2(720); recur(0,0,720); TRACE2(); }