const fs = require('fs');

const output = fs.readFileSync('manifest.txt', 'utf8')
                  .trim()
                  .split('\n')
                  .map(line => line.split(','))
                  .filter((line, i) => line[i] !== line[0])
                  .reduce((person, line) => {
                    person[line[0]] = person[line[0]] || []
                    person[line[0]].push({
                      product: line[1],
                      unitPrice: line[2],
                      units: line[3],
                      totalPrice: (line[2] * line[3]).toFixed(2)
                    })
                    return person;
                  }, {})
console.log(output);

// run in terminal using node cyb.js
