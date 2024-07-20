import { a as a2, add as add2, multiply as multiply2 } from "pkg-cjs-compat";
import { getValue as getValue2 } from "pkg-cjs-compat/get-value";

Promise.all([
  import("./get-my-value-node16.js"),
  import("./get-my-value-node10.js"),
  import("pkg-esm-pure"),
  import("pkg-esm-pure/get-value"),
]).then(
  ([
    { v1: v11, v2: v21 },
    { v1: v12, v2: v22 },
    { a: a1, add: add1, multiply: multiply1 },
    { getValue: getValue1 },
  ]) => {
    console.log(a1, a2);
    console.log(add1(1, 2), add2(1, 2));
    console.log(multiply1(2, 3), multiply2(2, 3));

    console.log(getValue1("esm"), getValue2("cjs"));

    console.log(v11, v12);
    console.log(v21, v22);
  }
);
