"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_assert_1 = require("node:assert");
const node_test_1 = require("node:test");
const index_1 = require("./index");
// test("primes", () => {
//   const result = factor(17);
//   console.log(result);
//   deepEqual(result, 17);
// });
(0, node_test_1.test)("factor of smallest primes", () => {
    const result = (0, index_1.factor)(25);
    console.log(result);
    (0, node_assert_1.deepEqual)(result, [5, 5]);
});
