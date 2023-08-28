const array = [1, 3, 3 , 2 , 2];
  // 1 = 01 -> value
  // 2 = 10 -> value
  // 3 = 11 -> value
  // 1 ^ 3 = 01 - 11 -> 10 = 2
  // 2 ^ 3 = 10 - 11 -> 01 = 1
  // 1 ^ 2 = 01 - 10 -> 11 = 3
  // 3 ^ 2 = 11 - 10 -> 01 = 1
function lonelyInteger(arr) {
  return arr.reduce((acc, curr) => acc ^ curr);
}

console.log('lonelyInteger', lonelyInteger(array));