// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------
// JAN. 5 : Write “Genuary” (Tracé linéaire perturbé)
function setup() {
  INIT2(720);
  
  // Text "GENUARY" with perturbed linear tracing
  let text = "GENUARY";
  let startX = 100;
  let letterWidth = 80;
  
  for (let letterIdx = 0; letterIdx < text.length; letterIdx++) {
    let letter = text[letterIdx];
    let offsetX = startX + letterIdx * letterWidth;
    
    // Simple letter shapes with sine perturbation
    for (let I = 0; I < 100; I++) {
      let t = I / 100;
      let X = offsetX + t * 60;
      let Y = 360 + 50 * sin(letter.charCodeAt(0) * t * 5) * noise(I + letterIdx * 100);
      
      if (I == 0) LPRINT(`M${int(X)},${int(Y)}`);
      else LPRINT(`D${int(X)},${int(Y)}`);
    }
  }
  
  TRACE2();
}