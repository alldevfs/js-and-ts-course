const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
// const a3 = a1.concat(a2, [7, 8, 9], 'Allan')
// ... rest operator => ... spread
const a3 = [... a1, 'Allan', ... a2, ...[7, 8, 9]]
console.log(a3)
