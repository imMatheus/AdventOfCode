const input = require('fs').readFileSync('day3').toString().trim().split('\n')

// part 1
// const arr = Array(input[0].length).fill(0)

// for (let i = 0; i < input.length; i++) {
//     const s = input[i]
//     for (let j = 0; j < s.length; j++) {
//         arr[j] = s[j] == 0 ? parseInt(arr[j]) - 1 : 1 + parseInt(arr[j])
//     }
// }

// const max = arr.map((a) => (a < 0 ? 0 : 1)).join('')
// const min = arr.map((a) => (a > 0 ? 0 : 1)).join('')

// console.log(parseInt(max, 2) * parseInt(min, 2))

// part 2
function max(arr, index) {
    if (arr.length < 2) return arr
    const one = []
    const zero = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][index] == 1) one.push(arr[i])
        if (arr[i][index] == 0) zero.push(arr[i])
    }
    if (zero.length > one.length) return max(zero, index + 1)
    return max(one, index + 1)
}

function min(arr, index) {
    if (arr.length < 2) return arr
    const one = []
    const zero = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][index] == 1) one.push(arr[i])
        if (arr[i][index] == 0) zero.push(arr[i])
    }
    if (zero.length <= one.length) return min(zero, index + 1)
    return min(one, index + 1)
}

console.log(parseInt(max(input, 0), 2) * parseInt(min(input, 0), 2))
