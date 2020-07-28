let a = prompt ("Введите коэффициент a:");
let b = prompt ("Введите коэффициент b:");
let c = prompt ("Введите коэффициент c:");



function quadratic (a, b, c) {
  let dicriminant = (b ** 2) - 4 * a * c;
  let x1 = (-b + (dicriminant ** (1/2))) / 2 * a;
  let x2 = (-b - (dicriminant ** (1/2))) / 2 * a;

  console.log(x1);
  console.log(x2);
}

void function quadratic(a, b, c);