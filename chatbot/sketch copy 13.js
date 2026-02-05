// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------
// JAN. 13 : Self portrait (Simplifié)
function setup() {
  INIT2(720);
  LPRINT("M360,200D460,360D360,520D260,360D360,200"); // Visage losange
  LPRINT("M320,300D340,300M380,300D400,300M330,450D390,450"); // Yeux et bouche
  TRACE2();
}