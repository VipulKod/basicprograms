function trianglePattern(n) {
  let row = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (j <= i) {
        row += "* ";
      }
      console.log(row);
    }
  }
}

trianglePattern(5);
