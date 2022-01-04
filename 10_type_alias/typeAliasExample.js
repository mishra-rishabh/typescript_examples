function combine(a, b, c, d) {
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number' && typeof d === 'number') {
        return (a + b + c + d);
    }
    else {
        return a.toString() + b.toString() + c.toString() + d.toString();
    }
}
var result1 = combine(1, 2, 3, 4);
var result2 = combine("I ", "Love", " My ", "India.");
console.log(result1);
console.log(result2);
