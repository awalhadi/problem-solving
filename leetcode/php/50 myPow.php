<?php

function myPow($x, $n)
{
    if ($n === 0) {
        return '1.00000';
    }

    if ($n < 0) {
        $x = 1 / $x;
        $n = -$n;
    }

    $result = 1;
    $current = $x;

    while ($n > 0) {
        if ($n % 2 === 1) {
            $result *= $current;
        }
        $current *= $current;
        $n = floor($n / 2);
    }

    // Manually round the result to 5 decimal places
    $result = number_format($result, 5, '.', '');

    return $result;
}

// Test cases
echo myPow(2.00000, 10);  // Output: 1024.00000
echo "\n";
echo myPow(2.10000, 3);   // Output: 9.26100
echo "\n";
echo myPow(2.00000, -2);  // Output: 0.25000
echo "\n";
echo myPow(1.0000000000001, -2147483648); // Output: 0.99979
