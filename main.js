let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=?7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the', 'gi')
// const regexp = /the/gi

// console.log(regexp.test(str))
// str = (str.replace(regexp, 'AAA'))
// console.log(str)

// console.log(str.match(regexp))
// console.log(str.match(/the/gi))

// console.log(str.match(/\.$/gim))

// const h = `   the hello world   !`

// console.log(
//   h.replace(/\s/g, '')
// )

console.log(
  str.match(/(?<=@).{1,}/g)
)