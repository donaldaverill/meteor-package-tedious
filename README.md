[![Build Status](https://travis-ci.org/fourquet/meteor-package-tedious.svg?branch=master)](https://travis-ci.org/fourquet/meteor-package-tedious)
```bash
meteor add fourquet:tedious
```
[tedious](https://www.npmjs.org/package/tedious) npm module wrapped for Meteor. Used for connecting to Microsoft SQL Server and Azure databases.

For more, see the [tedious Documentation](http://pekim.github.io/tedious/index.html).

Example:
```javascript
// on the server
var Connection = Tedious.Connection;

var config = {
  userName: 'userName@something.database.windows.net',
  password: 'password',
  server: 'something.database.windows.net',
  options: {
    encrypt: true,
    database: 'someDatabase'
  }
};

var connection = new Connection(config);

connection.on('connect', function (err) {
  var request = new Tedious.Request('SELECT TOP 20 * from dbo.SomeTable', function (err, rowCount) {
    if (err) {
      console.log(err);
    } else {
      console.log(rowCount + ' rows');
    }
  });

  request.on('row', function (columns) {
    var r = '';
    columns.forEach(function (column) {
      r = r + ' ' + column.value;
    });
    console.log('\n ', r);
  });

  connection.execSql(request);
});
```
