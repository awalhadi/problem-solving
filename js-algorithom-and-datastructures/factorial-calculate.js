
const factorialize = number => {
    if (number < 0) {
        return -1;
    }

    if (number == 1) {
        return 1;
    }
    return number * factorialize(number -1);
}

const factorialResult = factorialize(5);
console.log("results :", factorialResult);


