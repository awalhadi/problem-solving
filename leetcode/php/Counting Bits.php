<?php
class Solution
{

    /**
     * @var int[] 
     * @return Integer[]
     */
    function countBits(int $n)
    {
        $ans = array_fill(0, $n + 1, 0);


        for ($i = 1; $i <= $n; $i++) {
            $ans[$i] = $ans[$i & ($i - 1)] + 1;
        }
        return $ans;
    }
}

$solution = new Solution();

var_dump($solution->countBits(5));
