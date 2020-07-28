let a = 1;
let b = 4;
let c = 3;

quadraticEquation(a, b, c);

function quadraticEquation(a, b, c) {
  let discriminant = (b ** 2) - 4 * (a * c);

  let x1 = (-b + Math.sqrt(discriminant)) / (2 * a); 
  let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  console.log(x1, x2); 
}