#! /usr/bin/env node

import inquirer from "inquirer";

const answer : {
    sentence : string
} = await inquirer.prompt([
    {
        name : "sentence",
        type : "input",
        message : "Enter your sentence to count the word."
    }
])

const words = answer.sentence.trim().split(" ")

// print the array of the word to the console
console.log(words);

// print the word count of the sentence to the console
console.log(`Your sentence word count is: ${words.length}`);