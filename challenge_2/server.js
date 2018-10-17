const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.static('./client'))

// more robust input into parser by using extended
// use bodyParser because data comes in chunks that aren't readable by express. Request body will be empty since it's not able to read the data. BodyParser allows this data to be readable and appends to request body
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.text());

app.post('/post', (req, res) => {
  let data = req.body;
  res.send(
    `<!DOCTYPE html>
    <html>
    <body>
      <h1>JSON to CSV</h1>
      <div>
        <form method= "POST" action = '/post'>
          <textarea class = 'input' type = 'text' placeholder = 'JSON' name = 'JSON DATA'></textarea>
          <button>Submit</button>
        </form>
        <div id='csv'>${data}</div>
      </div>
    </body>
    </html>`
  );
});

app.listen(port, () => {console.log('listening on port', port)})

// server should respond with csv report along with form
