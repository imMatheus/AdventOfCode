let input = require('fs')
    .readFileSync('day1')
    .toString()
    .trim()
    .split('\n')
    .map((line) => parseInt(line))

let ans = 0

// part 1
// input.forEach((_, i) => {
//     if (input[i] > input[i - 1]) {
//         ans++
//     }
// })

// part 2
input.forEach((_, i) => {
    if (
        input[i] + input[i + 1] + input[i + 2] <
        input[i + 1] + input[i + 2] + input[i + 3]
    ) {
        ans++
    }
})

console.log(ans)
