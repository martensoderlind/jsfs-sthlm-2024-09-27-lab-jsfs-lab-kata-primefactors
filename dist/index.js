"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factor = factor;
function factor(p) {
    const result = [];
    let leftover = p;
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
    let i = 0;
    while (i < 9) {
        if (leftover % primes[i] === 0) {
            leftover = leftover / primes[i];
            result.push(primes[i]);
            continue;
        }
        else {
            i++;
        }
        // if (leftover % 2 === 0) {
        //   leftover = leftover / 2;
        //   result.push(2);
        //   continue;
        // }
        // if (leftover % 3 === 0) {
        //   leftover = leftover / 3;
        //   result.push(3);
        //   continue;
        // }
        // if (leftover % 5 === 0) {
        //   leftover = leftover / 5;
        //   result.push(5);
        //   continue;
        // }
        // if (leftover % 7 === 0) {
        //   leftover = leftover / 7;
        //   result.push(7);
        //   continue;
        // }
        // if (leftover % 11 === 0) {
        //   leftover = leftover / 11;
        //   result.push(11);
        //   continue;
        // }
        // if (leftover % 13 === 0) {
        //   leftover = leftover / 13;
        //   result.push(13);
        //   continue;
        // }
        // if (leftover % 17 === 0) {
        //   leftover = leftover / 17;
        //   result.push(17);
        //   continue;
        // }
        // if (leftover % 19 === 0) {
        //   leftover = leftover / 19;
        //   result.push(19);
        //   continue;
        // }
    }
    if (result.length === 0) {
        return p;
    }
    return result;
}
console.table(factor(345));
