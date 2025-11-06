#!/usr/bin/node
const x = parseInt(process.argv[2]);

if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  let i = 0;
  do {
    if (i >= x) break;
    console.log('C is fun');
    i++;
  } while (true);
}
