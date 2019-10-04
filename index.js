var fs = require('fs');
var readline = require('readline');
var allAnagrams = {};

function Anagram(anagrams) {
    allAnagrams = anagrams
}

var sortLetters = Anagram.prototype.sortLetters = function (word) {
    word = word.split("");
    word = word.sort();
    word = word.join("");
    return word;
}

var findAllAnagrams = Anagram.prototype.findAllAnagrams = function (inputString) {
    let sort = sortLetters(inputString.toLowerCase());
    if (allAnagrams[sort]) {
        return allAnagrams[sort];
    } else {
        return "There isn't any anagrams right now :(";
    }
}

var readFile = Anagram.prototype.readFile = function () {
    fs.readFile('wordlist.txt', 'utf8', (err, contents) => {
        if (err) {
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
            console.log(findAllAnagrams(word));
            rl.prompt();
        }).on('close', () => {
            console.log("Closed the interatcion sesion")
        });
    });
} 

module.exports = Anagram;
// readFile();