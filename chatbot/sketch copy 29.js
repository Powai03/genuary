// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------
// JAN. 29 : Genetic evolution (Mutation de T2 au clic)
let t2_mut = 200;
function mousePressed() { t2_mut = random(10, 500); }
function draw() { 
  INIT2(720); 
  for(let i=0; i<500; i++) { 
    let a=TWO_PI*i/500; X=360+150*cos(a)+50*cos(a*t2_mut); Y=360+150*sin(a)+50*sin(a*t2_mut);
    LPRINT(`M${int(X)},${int(Y)}D${int(X+1)},${int(Y+1)}`);
  }
  TRACE2(); 
}