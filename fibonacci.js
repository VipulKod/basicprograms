function fibonacciSeries(n) {
    var a = 0;
    var b = 1;
    var series = [];
  
    series.push(a);
    series.push(b);
  
    for (var i = 3; i <= n; i++) {
      var c = a + b;
      series.push(c);
      a = b;
      b = c;
    }
  
    return series;
  }
  
  // Example usage
  var n = 10;
  var result = fibonacciSeries(n);
  console.log(result);

// 0, 1, 1, 2, 3, 5, 8...

/**
 * 0
 * 0+1=1
 *   1+1=2
 *     1+2=3
 *       2+3=5
 *         3+5=8
 */
