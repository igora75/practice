const express = require('express');
const expressHbs = require('express-handlebars');
const fs = require('fs');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('.hbs', expressHbs({ defaultLayout: false }));
app.set('view engine', '.hbs');

let errTxt = '';
let dataFile = {
  users: [],
};

app.get('/', (req, res) => {
  res.render('main');
});

app.get('/users', (req, res) => {
  res.render('users', { users: dataFile.users });
});

app.get('/error', (req, res) => {
  res.render('error', { error: errTxt });
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { email } = req.body;
  fs.readFile('users.json', (err, data) => {
    if (err) throw err;
    dataFile = JSON.parse(data.toString());
    const result = dataFile.users.find((item) => item.email === email);
    if (result) {
      res.redirect('/users');
    } else {
      res.redirect('/');
    }
  });
});

app.post('/logBtn', (req, res) => {
  res.redirect('/login');
});

app.post('/reg', (req, res) => {
  const { email } = req.body;
  fs.readFile('users.json', (err, data) => {
    if (err) throw err;
    dataFile = JSON.parse(data.toString());
    const result = dataFile.users.find((item) => item.email === email);
    if (result) {
      errTxt = 'Email already exists';
      res.redirect('/error');
    } else {
      dataFile.users.push(req.body);
      const jsonStr = JSON.stringify(dataFile, null, 2);
      fs.writeFile('users.json', jsonStr, (error) => {
        if (error) throw error;
        res.redirect('/users');
      });
    }
  });
});

app.listen(3000);
