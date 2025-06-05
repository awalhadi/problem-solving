/**
 * first vowel print 
 * second consonent print
 */

const s = "javascriptsloops";
const vowel = 'aeiouAEIOU';
let others = '';
for (let i = 0; i < s.length; i++) {
    const element = s[i];

    if (vowel.indexOf(element) != -1) {
        
        console.log(element);
    }
    else{
        others += element + '\n';
    }
    
} 
console.log(others.trim());