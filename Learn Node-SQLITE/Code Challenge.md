# Code Challenge

1.  Using db.each(), select all the rows from a table from Flower. In the callback, check if the petal_color is ‘blue’ and console.log the row if it is.

```
const db = require('./db');

db.each("SELECT * FROM Flower", (err, row) => {
  if(row.petal_color === 'blue') {
    console.log(row)
  }
});
```

2. Use db.run() to create a new empty table called City.

```
const db = require('./db');

db.run("DROP TABLE IF EXISTS City", error => {
  if (error) {
    throw error;
  }
  db.run("CREATE TABLE City ()")
})
```

3. SELECT the superpower column of the superhero in the Superhero table with an id of 12 and console.log() that superpower in the callback function.

```
const db = require('./db');

db.get("SELECT superpower FROM Superhero WHERE id=12", (error, row) => {
  console.log(row.superpower)
});
```

4. The query in the workspace is going to return an error! Log the error to the console if it exists, otherwise log the retrieved rows.

```
const db = require('./db');

db.all('SELECT * from NonexistentTable', (err, rows) => {
  if (err) {
    console.log(err)
  } else {
    console.log(rows)
  }
});
```

5.
