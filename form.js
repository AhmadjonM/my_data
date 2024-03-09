function FindLongestWord(str) {
    
    let words = str.split(" ");
    let londestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > londestWord.length) {
            londestWord = words[i];
        }
        
    }
    return londestWord;
}

let londest;
londest = FindLongestWord("Обычная бесполезная строка");
console.log(londest);