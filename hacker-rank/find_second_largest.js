function getSecondLargest(nums) {
    const max_to_min = nums.sort((a, b) => b-a);
    
    let arr = [...new Set(max_to_min)];
    return arr[1];
    return arr;
}


function main() {
    const number = [2, 3, 6, 6, 5];
    
    console.log(getSecondLargest(number));
}

main();