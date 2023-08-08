
function Rectangle(a, b) {
    const rec           = {};
          rec.length    = a;
          rec.width     = b;
          rec.perimeter = 2 * (a + b);
          rec.area      = a * b;

    return rec;
}


function main() {
    const a = 4;
    const b = 5;
    
    const rec = new Rectangle(a, b);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}

main();