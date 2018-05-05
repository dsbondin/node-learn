const fs = require('fs');

console.log(process.argv);

process.stdout.write('hello world' + '\n');

fs.createReadStream(__filename).pipe(process.stdout);

let count = 1;
setInterval(function() {
  process.stdout.write(count + ' ');
  count ++;
  if (count > 10) {
    process.exit()
  }
}, 200)

const exec = require('child_process').exec;
exec('cat index.js', (err, stdout, stderr) => (
  console.log('cat index.js prints the contents of index.js into the console' + stdout)));
