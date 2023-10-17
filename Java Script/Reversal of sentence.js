function reverseWords(sentence) {
    
    let words = sentence.split(' ');

    
    let reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });

    let reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

let inputSentence = "The girl dressed so beautiful";
let reversedResult = reverseWords(inputSentence);

console.log(reversedResult); 
