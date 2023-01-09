# Code Challenge

## Code Challenge 1

1.  Using db.each(), select all the rows from a table from Flower. In the callback, check if the petal_color is ‘blue’ and console.log the row if it is.

```
const db = require('./db');

db.each("SELECT * FROM Flower", (err, row) => {
  if(row.petal_color === 'blue') {
    console.log(row)
  }
});
```
