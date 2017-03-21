// Zhao Loong
// function solution(N) {
//     // write your code in JavaScript (Node.js 6.4.0)
//     // if you specify a base for toString, you can get binary string for this
//     let binString = N.toString(2);
//     console.log(binString);
//     //matches 0+ if the next thing is a 1; in this case
//     //trailing 0s will never be matched!
//     let res = binString.match(/0+(?=1)/gi);
//     console.log(res);
//     let finalRes = 0;
//     if (!res) return 0
//     res.map(function(value,index){
//         if (value.length > finalRes){
//             finalRes = value.length;
//         }
//     })
//     return finalRes;
// }
//
// Jeremiah
// function solution(N) {
//     // first step is to convert the number to it's binary representation - we know it is positive, so can just use the toString method
//     let binary = N.toString(2)
//
//     // next we want to keep track of the longest gap we find and also the size of the current
//     var longest = 0
//     var current = -1 // -1 to indicate no current gap
//     for (let i = 0; i < binary.length; ++i){
//         // two cases, we encounter a 1 or a 0
//         // we can using == so that character is auto-converted to int for us in comparison
//         if (binary[i] == 1){
//             // if a 1 then we are either terminating (current > 0) a sequence or starting one
//             if (current > longest) {
//                 // if terminating then we set our new maximum
//                 longest = current
//                 // we can also terminate early, if it is not possible to encounter a longer sequence
//                 if (longest > binary.length - i ) break
//             }
//             // set current to zero to start a new sequence
//             current = 0
//         } else if (current >= 0) {
//             // if we encounter a zero and have a current sequence then increment the counter
//             current++
//         }
//     }
//
//     return longest
// }
//
function solution (N) {
  let currentGap = 0
  let maxGap = 0
  let startedCount = false
  while (N > 1) {
    let modulus = N % 2
    N = (N / 2) | 0
    console.log('after binary division, N is ' + N)
    if (modulus === 0 && startedCount) {
      console.log('currentGap is ' + currentGap)
      currentGap++
    } else if (modulus === 1) {
      console.log('modulus is ' + modulus)
      if (currentGap > maxGap && startedCount) {
        maxGap = currentGap
        console.log('maxGap is ' + maxGap)
      }
      startedCount = true
      currentGap = 0
    }
  }
  if (currentGap > maxGap) {
    maxGap = currentGap
  }
  console.log('maxGap is ' + maxGap)
  return maxGap
}

// solution(2)
// // binary 10, expect return 0
// solution(200)
// // binary 11001000, expect return 2
// solution(234098233)
// // binary 1101111101000000111000111001, expect return 6
// solution(2000000)
// binary 111101000010010000000, expect return 4
// solution(2147483647)
// binary 1111111111111111111111111111111, expect return 0
