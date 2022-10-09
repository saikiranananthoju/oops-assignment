function display(...args) {
    for (const b of args) {
        console.log(b);
    }
    console.log(`Total  Number of Arguments Passed : ${args.length}`);
}
display(11,22,33,44,55,66,77,88,99);