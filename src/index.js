module.exports = function solveEquation(equation) {
 // let solutions = [];
  let A, B, C;
  const solutions = solveEquation(eval(''));
  
  let x, x1, x2;
  
 let D = (B*B) - 4*A*C; 
  
  if (D > 0) {
	  x1 = (-B + Math.sqrt(D))/2*A;
	  this.solutions.push(x1);
	  
	  x2 = (-B - Math.sqrt(D) )/2*A;
	  this.solutions.push(x2);
  }
  
  else if (D == 0) {
	  x1 = -B/(2*A);
	  this.solutions.push(x1);
  }
  
   else if (D < 0) {
	  //continue;
  }
  
  return solutions;
}
