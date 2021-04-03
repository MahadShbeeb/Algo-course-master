// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// var str = 'hello world';

function maxChar(str) {
    let lettersMap={}
    for (let letter of str){
        lettersMap[letter]===undefined?lettersMap[letter]=1:lettersMap[letter]+=1
    }
    return Object.entries(lettersMap).sort((a,b)=>b[1]-a[1])[0][0]
}

// console.log(maxChar(str));

module.exports = maxChar;
