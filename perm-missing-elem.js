function solution (A) {
  let sum = 0
  let n = A.length
  for (let i = 0; i < n; i++) {
    sum += A[i]
  }
  return ((n + 1) * (n + 2) / 2) - sum
}

// console.log(solution([5, 2, 4, 3, 7, 9, 1, 6]))
// console.log(solution([3, 1, 7, 4, 2, 6]))
