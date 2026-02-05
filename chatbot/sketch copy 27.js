// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------

// JAN. 27 : Lifeform (Organisme pulsant)
function draw() {
  INIT2(720); 
  background(255);
  stroke(0);
  noFill();

  let R_base = 150 + sin(frameCount * 0.05) * 30;
  let N = 200; 
  for (let I = 0; I <= N; I++) {
    let AN = TWO_PI * I / N;
    
    let deformation = 20 * sin(AN * 5 + frameCount * 0.1);
    let R = R_base + deformation;

    let X = 360 + R * cos(AN);
    let Y = 360 + R * sin(AN);

    if (I == 0) {
      LPRINT(`M${int(X)},${int(Y)}`);
    } else {
      LPRINT(`D${int(X)},${int(Y)}`);
    }
  }
  
  TRACE2();
}