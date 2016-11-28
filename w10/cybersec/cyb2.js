fs = require('fs');
fs.readFile('manifest.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  data_array = data.split("\n");

  var object = {};

  for (var i = 1; i < data_array.length; i++) {
    var line = data_array[i].split(",");
    if (object[line[0]] === undefined) {
      object[line[0]] = [];
    }
    object[line[0]].push({
      product: line[1],
      unitPrice: line[2],
      units: line[3],
      totalPrice: (line[2] * line[3]).toFixed(2)
    });
  }
  console.log(object);
});
