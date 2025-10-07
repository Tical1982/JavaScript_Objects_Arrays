console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


//let total = 0;
    // for ( let i = 0; i  numbers.length; i++ ) { {
    //   total += " numbers  [i]"
    // }
    //   return total;

    // }

function arraySum(numbers) {
    let sum = 0; 
    
    numbers.forEach((number) => {
        sum += number; 
    });

    return sum;
    
}

const numbers = [2, 22, 12, 17, 18, 39, 129];

console.log(arraySum(numbers)); // Output: 239


const book = {};
  book.title = " The Hobbit";
  book.author = "J.R.R. Tolken";
  book.pages = 295;
  book.readCount = 1;

  book.info = function()  {
       return `${this.title} by ${this.author} is
       ${this.pages} pages, read status: ${this.readCount} time${this.readCount > 1 ? 's' : ''}.`;
  }


console.log(book.info());



let sentence = "The quick brown fox jumps over the lazy dog";
//let words = sentence.split(" ");
//let reversedWords = words.map( word => word.split(""). reverse().join(""));
let reversedSentence  = sentence
  .split(" ")
  .map((word) => word.split("").reverse().join(""))
  .join(" ");

console.log(reversedSentence);



let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

let rows = csvData.split('\n');
let headers = rows[0].split(',');
let result = [];

for (let i = 1; i < rows.length; i++) {
    let dataValues = rows[i].split(',');
    let newObject = {};

    headers.forEach((header, colIndex) => {
        newObject[header] = isNaN(dataValues[colIndex]) ? dataValues[colIndex] : Number(dataValues[colIndex]);
    })

    result.push(newObject)
}
console.log(result);

//   for (let j = 0; j  headers.length; j++) {
// newObject[headers[j]] = isNaN(dataValues[j]) ?
// dataValues[j] : parseInt(dataValues[j]);
// }
// result.push(newObject);

//   }

//   console.log(result)
//