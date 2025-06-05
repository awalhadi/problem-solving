/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const ans = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        ans[i] = ans[i & (i-1)] + 1;
    }
    return ans;
};

console.log(countBits(2));
console.log(countBits(7));