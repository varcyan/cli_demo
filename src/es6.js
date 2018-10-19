let a = 1;
let b = 2;
var fn = x => x * x;
function addAll() {
    return Array.from(arguments).reduce((a, b) => a + b);
}
console.log(addAll(2,4,5))
console.log(fn(2))