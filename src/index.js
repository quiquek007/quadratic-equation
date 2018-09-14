module.exports = function solveEquation(equation) {
  let A = "",
    B = "",
    C = "",
    D = 0,
    x1,
    x2,
    pos;
  //for A
  for(let i=0;i<equation.length;i++) {
    if (equation[i] == '*') {
      pos = i;
      break;
    }
    else if (equation[i] == ' ') continue;
    else A+=equation[i];
  }
  for(let i=pos+5;i<equation.length;i++) {
    if (equation[i] == '*') break;
    else if (equation[i] == ' ') continue;
    else B+=equation[i];
  }
  for(let i=equation.length-1;i!=0;i--) {
    if (equation[i] == 'x') break;
    else if (equation[i] == ' ') continue;
    else C=equation[i] + C;
  }
  A = Number(A);
  B = Number(B);
  C = Number(C);
  //D=B2-4*A*C
  D = B*B - 4*A*C;
  // x1=(-В+D1/2)/2А .
  x1 = (-B + Math.sqrt(D)) / (2*A);
  // x2=(-В-D1/2)/2А.
  x2 = (-B - Math.sqrt(D)) / (2*A);
  return x1<x2 ? [Math.round(x1),Math.round(x2)] : [Math.round(x2),Math.round(x1)];
}
