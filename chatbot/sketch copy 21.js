// COURBES TOURNANTES

// ----------------------------------------------------
let DESSIN = 94;

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,T1=1,T2=200,H1=1,H2=2,K1=1,K2=2,R1=NP*3/8,R2=NP/12;

// ----------------------------------------------------
//JAN 21: Bauhaus poster
function setup() {
  INIT2(720); background('#D2B48C'); fill('red'); rect(50,50,100,600);
  fill('blue'); ellipse(400,300,200); TRACE2();
}