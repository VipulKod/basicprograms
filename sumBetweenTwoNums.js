function sumBetweenTwoNums(initialNum, finalNum) {
  let getTotalSum = 0;
  for (let i = initialNum; i <= finalNum; i++) {
    getTotalSum += i;
  }
  return getTotalSum;
}

// Example values
sumBetweenTwoNums(0, 100)
// result 5050
