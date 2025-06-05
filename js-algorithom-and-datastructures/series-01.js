/**
 * calculate series
 * 1 + 2 + 3 + 4 + 5 ......+ n
 */

const calculateSereis = num => {
    if (num < 0) {
        // console.log(-1); 
        return -1;   
    }

    if (num == 1) {
        // console.log(1);
        return 1;
    }

    return num + calculateSereis(num - 1);
}

const result = calculateSereis(10);
console.log("results: ", result); 