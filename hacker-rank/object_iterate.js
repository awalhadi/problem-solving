function getCount(objects) {
    let count = 0;
    if (objects.length > 0) {
        objects.forEach(o => {
            if (o.x ===  o.y) {
                count += 1;
            }
        });
    }
    return count;
}


function main() {
    let objects = [
        {x:1, y:1},
        {x:2, y:3},
        {x:3, y:3},
        {x:3, y:4},
        {x:4, y:5},
    ];
    
    console.log(getCount(objects));
}

main();