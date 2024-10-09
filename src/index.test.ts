import { deepEqual } from "node:assert";
import { test } from "node:test";
import { factor } from "./index";

// test("primes", () => {
//   const result = factor(17);
//   console.log(result);
//   deepEqual(result, 17);
// });
test("factor of smallest primes", () => {
  const result = factor(25);
  console.log(result);
  deepEqual(result, [5, 5]);
});
