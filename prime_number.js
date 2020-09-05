function isPrime(n){
    var result = "Not Prime number";
    if(n <= 1) return result;
    for(var i = 2; i < n; i++){
        if (n % i == 0) {
            return i;
        }else{
            return i;
        }
    }
}

console.log(isPrime(15));