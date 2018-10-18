let mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'checkout'
});

// create function to insert into form1
let createF1 = (name, email, password, callback) => {
  const query = `INSERT INTO form1 (name, email, password) VALUES (?, ?, ?)`;
  connection.query(query, [name, email, password], (error, results, fields) => {
    callback(error);
  });
};
// create function to insert into form2

// create function to insert into form3

// create function to retrieve info from form 1
let getForm1 = (callback) => {
  connection.query('SELECT * FROM form1', (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};
// create function to retrieve info from form 2

// create function to retrieve info from form 3

// createF1('ilovehotcheetos', 'hotcheetos', 'hotcheetos', () => {
//   console.log('hi')
// })

// getForm1(() => {
//   console.log('hot cheetos')
// })

module.exports.createF1 = createF1;
module.exports.getForm1 = getForm1;
