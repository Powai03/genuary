// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------
// JAN. 9 : Crazy automaton (Modulo bizarre)
function setup() {
  createCanvas(720, 720);
  background(255);
  stroke(0);
  
  for (let I = 0; I < 10000; I++) {
    let X = I % 720;
    let Y = (I * I) % 720;
    
    // Check condition: (X XOR Y) modulo 17 equals 0
    if (((int(X) ^ int(Y)) % 7) === 0) {
      // Draw a point or small line at X, Y
      // The original command was likely Move to X,Y then Draw to X+1, Y
      line(X, Y, X + 10, Y);
    }
  }
}