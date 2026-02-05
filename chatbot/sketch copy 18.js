// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------
// JAN. 18 : Unexpected path (Marche aléatoire)
function setup() {
  INIT2(720); let x=360, y=360;
  for(let i=0; i<500; i++) {
    let nx=x+random(-30,30); let ny=y+random(-30,30);
    LPRINT(`M${int(x)},${int(y)}D${int(nx)},${int(ny)}`); x=nx; y=ny;
  }
  TRACE2();
}