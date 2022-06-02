let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// Step 1 - remove last string, 'JavaScript' of the array
secretMessage.pop()
console.log(secretMessage)
// Step 2 - log the length of the array
console.log(secretMessage.length)

// Step 3 - add 'to' and 'program' to end of the array
secretMessage.push('to','program')
console.log(secretMessage)

// Step 4 - Replace value 'easily' with 'right'
let easy = secretMessage.indexOf('easily')
secretMessage.splice(easy, 1, 'right')
console.log(secretMessage)
// Step 5 - remove first string in the array
secretMessage.shift()
console.log(secretMessage)
// Step 6 - add string 'Programming' to front of array
secretMessage.unshift('Programming')
console.log(secretMessage)
// step 7 - replace 'get' 'right' 'the' 'first' 'time' and replace with 'know'
let got = secretMessage.indexOf('get')
secretMessage.splice(got, 5, 'know')
console.log(secretMessage)
// step 8 - use .join to create a sentence with array
console.log(secretMessage.join(' '))
