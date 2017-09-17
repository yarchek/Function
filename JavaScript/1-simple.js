'use strict';

function inc(a) {
  return ++a;
}

const sum = function(a, b) {
  return a + b;
};

const max = (a, b) => (a > b ? a : b);

console.log('inc(5) = ' + inc(5));
console.log('sum(1, 3) = ' + sum(1, 3));
console.log('max(8, 6) = ' + max(8, 6));

const min = (b, c) => (b<c ? b : c)
console.log('min(-3, 5) = '+ min(-3, 5))