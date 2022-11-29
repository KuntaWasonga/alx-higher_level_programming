#!/usr/bin/node
const n = parseInt(process.argv[2]);
if (Number.isNaN(n)) {
  console.log('Missing size');
} else {
  for (let i = 0, s; i < n; i++) {
    s = '';
    for (let j = 0; j < n; j++) {
      s += 'X';
    }
    console.log(s);
  }
}
