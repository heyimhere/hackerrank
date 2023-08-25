const array = [1, 2, 5, 3, 7, 8, 6, 4];
              //1, 2, 3, 4, 5, 6, 7, 8
              //1, 2, 5, 3, 4, 6, 7, 8 > 2
              //1, 2, 5, 3, 7, 4, 6, 8 > 2
              //1, 2, 5, 3, 7, 8, 4, 6 > 2
              //1, 2, 5, 3, 7, 8, 6, 4 > 1
                                    // = 7

// function minimumBribes(q) {
//   let count = 0;
//   for(let i = 0; i < q.length; i++) {
//     if(q[i] - q[i + 1] > 2) return console.log('Too chaotic');
//     for(let j = 0; j < i; j++) {
//       if(q[j] > q[i]) {
//         count++;
//       }
//     }
//   }
//   console.log('count', count);
// }

function minimumBribes(q) {
  let bribes = 0;
  for (let i = q.length - 1; i >= 0; i--) {
      if (q[i] - (i + 1) > 2) {
          console.log("Too chaotic");
          return;
      }
      for (let j = Math.max(0, q[i] - 2); j < i; j++) {
          if (q[j] > q[i]) bribes++;
      }
  }
  console.log(bribes);
}

minimumBribes(array);