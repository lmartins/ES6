'use strict';
var evens = [2, 4, 6, 8, 10]
var odds = evens.map( v => v + 1 );
console.log(odds);

var nums = [1, 2, 5, 15, 25, 32]
nums.forEach( v => {
  if (v % 5 === 0){
    fives.push(v);
  }
})
