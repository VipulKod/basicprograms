function fibonacci(startNum, endNum) {
  let a = startNum;
  let b = startNum + 1;
  let c = 0;

  for (let i = startNum; i <= endNum; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}

// 0, 1, 1, 2, 3, 5, 8...

/**
 * 0
 * 0+1=1
 *   1+1=2
 *     1+2=3
 *       2+3=5
 *         3+5=8
 */
