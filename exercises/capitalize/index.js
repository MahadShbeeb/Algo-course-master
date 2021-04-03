// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let captialStr=''
    for (let word of str.split(" ")){
        captialStr+=word[0].toUpperCase()+word.substring(1,word.length)+' '
    }
    return captialStr
}

module.exports = capitalize;
