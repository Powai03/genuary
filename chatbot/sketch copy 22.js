// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------
// JAN. 22 : Pen plotter ready (Lignes continues, optimisé pour le tracé)
function setup() {
  INIT2(720);
  background(255);
  stroke(0);
  noFill();

  // On dessine plusieurs cercles concentriques
  for (let r = 50; r < 300; r += 20) {
    for (let a = 0; a <= TWO_PI + 0.1; a += 0.1) {
      let x = 360 + r * cos(a);
      let y = 360 + r * sin(a);
      
      if (a === 0) {
        // Positionner le stylo au début du cercle
        LPRINT(`M${int(x)},${int(y)}`);
      } else {
        // Tracer la ligne continue
        LPRINT(`D${int(x)},${int(y)}`);
      }
    }
  }
  TRACE2();
}
