let s = '1234';
try {
    s = s.split("").reverse().join("");
} catch(e) {
    console.log(e.message);
} finally {
    console.log(s);
}