const express = require('express'); //make an express object which is the foundation
const router = express.Router(); //make the router object which you can receive from express
const { readFile, writeFile } = require('fs').promises; //desctructuring

router.get('/', (req, res) => {
    res.send("There are no words here");
});

router.get('/wotd', async (req, res) => {
    //let wordArray = await getWordFromDictionary(); //store word array
    //let [word, part, definition] = wordArray; //index 0 = word, index 1=part, index 2= defintion
    let [word, part, definition] = await getWordFromDictionary();
    res.render('wotd', { word: word, part: part, definition: definition });
});
let counter = 0;
let allWordsF;

router.get('/allwords', async (req, res) => {

    // const data = await readFile('resources/allwords.txt', { encoding: 'utf-8' });
    // let lines = data.split('\n');
     const data = await readFile('resources/allwords.txt', { encoding: 'utf-8' });
     let lines = data.split('\n');
   
    res.render('allwords', { lines: lines });



});


let getWordFromDictionary = async () => { //asynchronous function
    try {
        //promising that the file will be stored in data
        //if it fails the error will be caught
        const data = await readFile('resources/allwords.txt', { encoding: 'utf-8' });
        let lines = data.split('\n'); //an array where each index holds, a line
        let randomNumber = parseInt(Math.random() * lines.length) //get a random number where the bounds are 0 to line.length
        let randomLine = lines[randomNumber];
        let wordArray = randomLine.split('\t') //the lines were split by tabs
        return wordArray;
    }
    catch (err) {
        console.log("There was an error reading the file:", err)
    }
}

// let linesFromDictionary = async (counter) => { //asynchronous function
//     try {
//         //promising that the file will be stored in data
//         //if it fails the error will be caught
//         const data = await readFile('resources/allwords.txt', { encoding: 'utf-8' });
//         let lines = data.split('\n'); //an array where each index holds, a line

//         let wordArray = lines[counter].split('\t')


//         return wordArray;
//     }
//     catch (err) {
//         console.log("There was an error reading the file:", err)
//     }
// }


module.exports = router; //need to export