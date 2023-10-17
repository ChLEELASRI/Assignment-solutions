function sortDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}

let inputArray = [8,7, 5, 4, 3];
let sortedArray = sortDescending(inputArray);

console.log(sortedArray); 
