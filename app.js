import { writeFile, readFile } from 'node:fs';
import Chance from 'chance';

// Instantiate Chance so it can be used
const chance = new Chance();
let array = [];

export function init() {

    for (let index = 0; index < 10; index++) {
        array.push(chance.word({ length: 6 }))
        
    }
    
    writeFile( './array.txt',
    
        JSON.stringify(array), (err) => {
            if (err) throw err;
        }
    );
    let text = readFile('./array.txt', "utf8", (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`The file output is  ${data}`);
    })

}


