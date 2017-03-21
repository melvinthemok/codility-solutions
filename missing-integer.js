function solution(A) {
  // A = A.filter(function (number, index) {
  //   return number > 0 && A.indexOf(number) == index
  // }).sort(function (a, b) {
  //   return a - b
  // })
  // if (A.length === 1) return A[0] === 1 ? 2 : 1
  // if (!A.includes(1)) return 1
  // for (let i = 0; i < A.length; i++) {
  //   if (A[i] - A[i - 1] > 1) {
  //     return A[i] - 1
  //   }
  // }
  // return null
  // // A = A.filter(function (number, index) {
  // //   return number > 0 && A.indexOf(number) == index
  // // }).sort(function (a, b) {
  // // return a - b
  // // })
  // // if (A.length === 1) return A[0] === 1 ? 2 : 1
  // // if (!A.includes(1)) return 1
  // // let current = 1
  // // let B = []
  // // for (let i = 0; i < A.length; i++) {
  // //   B.push(A[i])
  // //   if (B.includes(current)) current++
  // //   else return current
  // // }
  let consecutiveIntegers = {}
  for (let i = 1; i < 100000; i++) {
    consecutiveIntegers[i] = true
  }
  for (let i = 0; i < A.length; i++) {
    if (A[i] < 100000 && A[i] > 0) {
      if (consecutiveIntegers[A[i]]) {
        consecutiveIntegers[A[i]] = false
      }
    }
  }
  for (let i = 0; i < 100000; i++) {
    if (consecutiveIntegers[i]) {
      return i
    }
  }
  return 100001
}

// console.log(solution([-5, -2, -1, 1, 3, -1, -3, -1, -4]))
// console.log(solution([2]))
// console.log(solution([1, 3, 7, 7, 5, 5, -1, 4, 1, 2]))