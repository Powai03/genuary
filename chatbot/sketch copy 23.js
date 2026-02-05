// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------

// JAN. 23 : Transparency (Effet de superposition soyeuse)
function setup() {
  INIT2(720);
  background(255);
  
  let N = 2000;
  for (let j = 0; j < 10; j++) {
    stroke(200, 0, 0, 30); 
    
    for (let I = 0; I < N; I++) {
      let AN = 2 * PI * I / N;
      let X = 360 + 200 * cos(AN) + 50 * cos(AN * 10) + (j * 2);
      let Y = 360 + 200 * sin(AN) + 50 * sin(AN * 10) + (j * 2);
      
      if (I == 0) {
        LPRINT(`M${int(X)},${int(Y)}`);
      } else {
        LPRINT(`D${int(X)},${int(Y)}`);
      }
    }
  }
  TRACE2();
}