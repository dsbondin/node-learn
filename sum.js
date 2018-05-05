let sum = 0;
process.argv = process.argv.slice(2);
process.argv.forEach(function(number) {
  sum += parseInt(number);
});

console.log(sum)

// ♥ node sum.js 3 5 4
// 12
