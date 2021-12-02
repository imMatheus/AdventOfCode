const input = require('fs').readFileSync('day2').toString().trim().split('\n')

// part 1
// let x = 0
// let y = 0

// input.forEach((s) => {
//     const [l, n] = s.split(' ')
//     if (l === 'forward') x += n * 1
//     if (l === 'down') y += n * 1
//     if (l === 'up') y -= n * 1
// })

// part 2
let x = 0
let y = 0
let aim = 0

input.forEach((s) => {
    const [l, n] = s.split(' ')
    if (l === 'forward') {
        x += n * 1
        y += n * aim
    }
    if (l === 'down') aim += n * 1
    if (l === 'up') aim -= n * 1
})

console.log(x * y)
