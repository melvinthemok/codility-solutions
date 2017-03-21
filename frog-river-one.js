function solution (A, X) {
  // let arr = Array(X).fill(0).map((e, i) => i + 1)
  // for (let i = 0; i < A.length; i++) {
  //   if (arr.includes(A[i])) arr.splice(arr.indexOf(A[i]), 1)
  //   if (arr.length === 0) return i
  //   else return -1
  // }
  // // let leaves = {}
  // // for (let i = 0; i < A.length; i++) {
  // //   leaves[A[i]] = true
  // //  if (Object.keys(leaves).length === X) return i
  // // }
  // // return -1
  // if (A.length === 1) return A[0] === X ? 0 : -1
  // let leaves = []
  // for (let i = 0; i < A.length; i++) {
  //   if (A[i] <= X && !leaves.includes(A[i])) {
  //     leaves.push(A[i])
  //     if (leaves.length === X) return i
  //   }
  // }
  // return -1
  let leaves = []
  let expectedTotal = 0
  let total = 0
  for (let i = 1; i <= X; i++) {
    leaves[i] = 0
    expectedTotal += i
  }
  for (let j = 0; j < A.length; j++) {
    if (leaves[A[j]] === 0) {
      leaves[A[j]] = 1
      expectedTotal -= A[j]

      if (expectedTotal === 0) {
        return j
      }
    }
  }
  return -1
}

console.log(solution([3, 1, 5, 2, 1, 2, 4, 1, 2, 4, 2, 3], 5))
