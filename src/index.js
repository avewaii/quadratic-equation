module.exports = function solveEquation(equation) {
  const solutions = [];
  let x, x1, x2;

  equation = equation.replace(/\s/g, '');
  
    let splitIndices = [];
  for (let i = equation.length - 1; i >= 0; --i) {
    if (equation[i] === '+' || equation[i] === '-') {
      splitIndices.unshift(i);
    }
    if (splitIndices.length === 2) {
      break;
    }
  }
   
   let substrings = [];
   
  substrings.push(equation.slice(0, splitIndices[0]));
  substrings.push(equation.slice(splitIndices[0], splitIndices[1]));
  substrings.push(equation.slice(splitIndices[1]));
  
  
  
  let A = parseInt(substrings[0]),
	  B = parseInt(substrings[1]),
      C = parseInt(substrings[2]);

 //как вычислить дискриминант
	 
	 let D = (B*B) - 4*A*C; 
  
  if (D > 0) {
	  x1 = (-B + Math.sqrt(D))/(2 * A);
	  solutions.push(Math.round(x1));
	  
	  x2 = (-B - Math.sqrt(D) )/(2 * A);
	  solutions.push(Math.round(x2));
  }
  
  else if (D == 0) {
	  x = -B/(2 * A);
	  solutions.push(Math.round(x));
  }
  
   else if (D < 0) {
	  return solutions = [];
  }
  
  return solutions.sort ((a, b) => a - b);
}
