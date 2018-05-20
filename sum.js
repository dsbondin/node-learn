process.argv = process.argv.slice(2);
let sum = process.argv
  .reduce((prev, next) => parseInt(prev) + parseInt(next))

console.log(sum)
// process.stdout.write(sum + '\n') same as console.log(sum)

// ♥ node sum.js 3 5 4
// 12
