module.exports = function solveEquation(equation) {
  var tokens = equation.split(" ");
  var a = Number(tokens[0]);
  var b = Number(tokens[3] + tokens[4]);
  var c = Number(tokens[7] + tokens[8]);
  
  var discriminant = b * b - 4 * a * c;
  var x1 = (- b + Math.sqrt(discriminant)) / (2 * a);
  var x2 = (- b - Math.sqrt(discriminant)) / (2 * a);
  
  return [Math.round(x1), Math.round(x2)].sort( (a, b) => (a > b) );
}
