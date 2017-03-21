// // complexity O(n^2)
// function solution (A) {
//   let minDiff = 10000
//   for (let p = 1; p < A.length; p++) {
//     let arr1 = A.slice(0, p)
//     let arr1sum = 0
//     for (let i = 0; i < arr1.length; i++) {
//       arr1sum += arr1[i]
//     }
//     let arr2 = A.slice(p, A.length)
//     let arr2sum = 0
//     for (let j = 0; j < arr2.length; j++) {
//       arr2sum += arr2[j]
//     }
//     let diff = Math.abs(arr1sum - arr2sum)
//     if (diff < minDiff) {
//       minDiff = diff
//     }
//   }
//   return minDiff
// }
//
// // console.log(solution([4, 5, 7, 2, 6]))
//
// complexity O(n)
function solution (A) {
  let leftSum = 0, rightSum = 0
  let totalSum = 0
  let lastMin, currentMin
  let N = A.length

  if (N === 2) { return Math.abs(A[0] - A[1]) }
  if (N === 1) { return Math.abs(A[0]) }

  for (i = 0; i < N; i++) {
    totalSum += A[i]
  }

  // start with lastMin being the difference between the first item in the array and the rest of the array
  lastMin = Math.abs((totalSum - A[0]) - A[0])

  for (p = 1; p <= N - 1; p++) {
    leftSum += A[p - 1]
    rightSum = totalSum - leftSum
    currentMin = Math.abs(leftSum - rightSum)
    lastMin = (currentMin < lastMin) ? currentMin : lastMin
  }

  return lastMin
}

console.log(solution([4, 5, 7, 2, 6]))
