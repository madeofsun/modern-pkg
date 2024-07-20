import { a as a1, add as add1, multiply as multiply1 } from "pkg-esm-pure";
import { getValue as getValue1 } from "pkg-esm-pure/get-value";

import { a as a2, add as add2, multiply as multiply2 } from "pkg-cjs-compat";
import { getValue as getValue2 } from "pkg-cjs-compat/get-value";

console.log(a1, a2);
console.log(add1(1, 2), add2(1, 2));
console.log(multiply1(2, 3), multiply2(2, 3));

console.log(getValue1("esm"), getValue2("cjs"));

export function getMyValue1() {
  return getValue1("esm");
}

export function getMyValue2() {
  return getValue2("cjs");
}
