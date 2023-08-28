const size = 4;

function staircase(n) {
  // code here
  let spaceNumber = n;
  for(let i = 1; i <= n; i++) {
    let spaces = ' '.repeat(spaceNumber = spaceNumber - 1);
    let hashes = '#'.repeat(i);
    console.log(spaces + hashes);
  }
}

staircase(size);