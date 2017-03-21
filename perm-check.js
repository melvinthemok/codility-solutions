// // Adrian's solution in Ruby

// def solution(a)
//   ((1..a.length).to_a + a).reduce(:^) == 0 ? 1 : 0
// end

// puts solution([5, 2, 1, 3, 4])

function solution (A) {
  // let num = 1
  // A.forEach(function (element, index) {
  //   if (!A.includes(index + 1)) num = 0
  // })
  // return num
  // // // if ((new Set (A)).size !== A.length) return 0
  // // for (let i = 1; i <= A.length; i++) {
  // //   if (A.indexOf(i) === -1) return 0
  // // }
  // // return 1
  if (A.length === Math.max(...A) && A.length === ((new Set (A)).size)) return 1
  else return 0
}

console.log(solution([5, 2, 1, 4, 3]))
