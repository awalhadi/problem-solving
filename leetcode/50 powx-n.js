var myPow = function(x, n) {
    if (n === 0) {
        return 1.0;
    }
    
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    
    let result = 1;
    let current = x;
    
    while (n > 0) {
        if (n % 2 === 1) {
            result *= current;
        }
        current *= current;
        n = Math.floor(n / 2);
    }
    
    return result;
};

// Test cases
console.log(myPow(2.00000, 10));  // Output: 1024.00000
console.log(myPow(2.10000, 3));   // Output: 9.26100
console.log(myPow(2.00000, -2));  // Output: 0.25000
