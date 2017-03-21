function solution (A, K) {
  if (A.length === 0 || A.length === 1 || K === 0) {
    return A
  } else {
    for (let i = 0; i < K; i++) {
      let toMove = A[A.length - 1]
      A.pop(A[A.length - 1])
      A.unshift(toMove)
    }
    return A
  }
}

// console.log(solution([1, 2, 3, 4, 5], 3))
// console.log(solution([9, 8, 7, 6, 5, 4, 3, 2, 1], 2))
