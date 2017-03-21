// // Terence's recursive solution in ruby
//
// def solution(a)
//   return a[0] if a.length === 1
//
//   for i in 1...a.length do
//     if a[0] === a[i]
//       a.slice!(i)
//       a.shift
//       return solution(a)
//     end
//   end
//   
//   return a[0]
// end
//
function solution (A) {
  let result = {}
  for (let i in A) {
    let element = A[i]
    !result[element] ? result[element] = 1 : delete result[element]
  }
  return Object.keys(result)[0]
}

// console.log(solution([72, 2, 1290, 690, 1290, 2, 72, 99, 690]))
// console.log(solution([99999, 27, 982340, 89, 3, 89, 3, 99999, 982340]))
