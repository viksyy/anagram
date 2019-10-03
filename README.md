# Anagram Finder

## Task description:

The task is to write a program which finds all anagrams of a given word in a dictionary (the anagram must also be part of the dictionary).
The dictionary is a simple text file which contains one word per line. The program should handle anagram-requests as fast as possible. 
Consider a pre-processing of the dictionary to optimize the requests.

## Understanding the problem

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. For example, the word anagram can be rearranged into nag a ram, or the word binary into brainy or the word adobe into abode
![Anagram example](https://wordsmith.org/anagram/images/anagram-listen-silent.png
)

## Prequities (Needed environment)

You need to install to your OS above listed runtime and package manager

* Node.js
* npm

After successful installation of Node.js be sure that `node` is added to your path.
To check the successful installation of node.js type to your OS's commandline interface the following:

    $ node -v

You should see the installed node.js version on the next line. 
E.g: `v10.15.3`

Check the npm too if it's installed properly to your OS.

    $ npm -v

You should see the installed node.js version on the next line. 
E.g: `v6.4.1`

## Start the script

On the root project directory install the neccessary dependencies with help of `npm`

    $ npm install

After `npm install` finishes, start the main script.

    $ node index.js

Attention: Be sure that the wordlist file should be in root project directory and the name of file must be `wordlist.txt` and every word in that file must be in the new line.

## Tests
