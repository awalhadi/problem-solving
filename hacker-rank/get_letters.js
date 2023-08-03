function getLetter(s) {
    let letter;
    const firstChar = s[0].toLowerCase();
    switch (true) {
        case 'aeiou'.includes(firstChar):
            letter = 'A';
            break
        case 'bcdfg'.includes(firstChar):
            letter = 'B';
            break
        case 'hjklm'.includes(firstChar):
            letter = 'C';
            break
        default:
            letter = 'D';
            break
      }
    
    return letter;
}


function main() {
    const s = 'fshdjshk';
    
    console.log(getLetter(s));
}

main()