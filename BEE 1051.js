const input       = "4520.00";
var   lines       = input.split('\n')
const salary = parseFloat(lines.shift()).toFixed(2);

if (2000.0 < salary && salary <= 3000.00) {
    const taxableAmount = salary - 2000.00;
    const totalTax      = parseFloat((taxableAmount * 8) / 100);
    console.log(`R$ ${totalTax.toFixed(2)}`);
}
else if(3000.0 < salary && salary <= 4500.00){
    const taxableAmount        = salary - 2000.00;
    const previousBlockRange   = 1000.00;
    const taxAmountOfThisBlock = taxableAmount - previousBlockRange;
    const firstTax             = parseFloat((previousBlockRange * 8) / 100);
    const restAmountOfTax      = parseFloat((taxAmountOfThisBlock * 18) / 100);
    const totalTax             = (firstTax + restAmountOfTax).toFixed(2);
    console.log(`R$ ${totalTax}`);
    
    taxPercent = 18;
}else if(4500.0 < salary){
    const taxableAmount = salary - 2000.00;
    const first         = 1000.00;
    const second        = 1500.00;

    const thirdAmount = taxableAmount - (first + second);
    const firstTax    = parseFloat((first * 8) / 100);
    const secondTax   = parseFloat((second * 18) / 100);
    const thirdTax    = parseFloat((thirdAmount * 28) / 100);
    const totalTax    = (firstTax + secondTax + thirdTax).toFixed(2);
    console.log(`R$ ${totalTax}`);
}else{
    console.log("Isento");
}
