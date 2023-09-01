function compareTriplets(a, b) {
  // code here
  let array = [0, 0];
  for(let i = 0; i < a.length; i++) {
    if(a[i] > b[i]) {
      array[0]++;
    } else if(a[i] < b[i]) {
      array[1]++;
    }
  }
  return array;
}

console.log('compare triplets', compareTriplets([5, 6, 7], [3, 6, 10]));