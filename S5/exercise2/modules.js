import * as fs from 'fs/promises';

let result = await fs.readFile("boardgames.json");
let data = JSON.parse(result);
console.log(data);

for(let i in data){
    let filename = `${i}.json`;
    let bg = JSON.stringify(data[i]);
    await fs.writeFile(filename, bg);
}