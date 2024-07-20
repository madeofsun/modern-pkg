import { v1 as v11, v2 as v21 } from "./get-my-value-node16";
import { v1 as v12, v2 as v22 } from "./get-my-value-node10";

import { a as a1, add as add1, multiply as multiply1 } from "pkg-esm-pure";
import { getValue as getValue1 } from "pkg-esm-pure/get-value";

import { a as a2, add as add2, multiply as multiply2 } from "pkg-cjs-compat";
import { getValue as getValue2 } from "pkg-cjs-compat/get-value";

console.log(a1, a2);
console.log(add1(1, 2), add2(1, 2));
console.log(multiply1(2, 3), multiply2(2, 3));

console.log(getValue1("esm"), getValue2("cjs"));

console.log(v11, v12);
console.log(v21, v22);
