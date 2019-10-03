// TODO:
// 1.Clean up the code
// 2.Unit test
// or 3.Integration tests
// 4.push on my privte repository
// 5.add access for view the code

var fs = require('fs');
var readline = require('readline');
var allAnagrams = {};

function sortLetters(word) {
    word = word.split("");
    word = word.sort();
    word = word.join("");
    return word;
}

function findAllAnagrams(inputString) {
    let sort = sortLetters(inputString.toLowerCase());
    if (allAnagrams[sort]) {
        console.log(allAnagrams[sort]);
    } else {
        console.log("There isn't any anagrams right now :(");
    }
}

fs.readFile('wordlist.txt', 'utf8', (err, contents) => {
    if(err){
        console.log("Something went wrong!")
        console.log("Detalis: ", err);
        return;
    }

    let words = [];
    words = contents.split('\r\n');
    for (var i in words) {
        var word = words[i].toLowerCase();
        var sorted = sortLetters(word);
        if (allAnagrams[sorted] != null) {
            allAnagrams[sorted].push(word);
        }
        else {
            allAnagrams[sorted] = [word];
        }
    }

    var rl = readline.createInterface(process.stdin, process.stdout);
    rl.setPrompt('Enter your word to find all anagrams: ');
    rl.prompt();
    rl.on('line', (word) => {
        findAllAnagrams(word)
        resultList = [];
        rl.prompt();
    }).on('close', () => {
        console.log("Closed the interatcion sesion")
    });
});