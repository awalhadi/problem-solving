function factorial(n){
    if (n === 0 || n === 1) {
        return 1;
    }else{
        return n * factorial(n-1);
    }
}


function main() {
    const n = 5;
    
    console.log(factorial(n));
}

main();