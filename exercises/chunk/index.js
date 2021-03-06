// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

var array = [1, 2, 3, 4, 5, 6, 7, 8];
var size = 3; 

function chunk(array, size) {
    let chunckArray=[],subArray=[],n=size
    for (let i=0;i<array.length;i++){
        if(n>0){
            subArray.push(array[i])
            n-=1
        }else{
            chunckArray.push(subArray)
            subArray=[array[i]]
            n=size-1
        }
    }
    chunckArray.push(subArray)
    return chunckArray
}

console.log(chunk(array, size));

module.exports = chunk;


// function chunk(array, size) {
//     const chunked = [];
    
//     for(let element of array) {
//         let last = chunked[chunked.length -1];

//         if(!last || last.length === size) {
//             chunked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }
//     return chunked; 
// }