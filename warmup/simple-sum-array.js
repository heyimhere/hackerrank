function simpleSumArray(ar) {
  // code here
  return ar.reduce((acc, curr) => acc + curr);
}

console.log('simple sum array', simpleSumArray([ 1, 2, 3, 4, 10, 11 ]));