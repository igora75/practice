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
let logStatus = false;
let afterLog = true;

app.get('/', (req, res) => {
  logStatus = false;
  afterLog = true;
  res.render('main');
});

app.get('/users', (req, res) => {
  if (afterLog) {
    errTxt = 'Please login';
    res.redirect('/error');
  } else {
    res.render('users', { users: dataFile.users, isLogin: logStatus });
  }
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
      logStatus = true;
      afterLog = false;
      res.redirect('/users');
    } else {
      res.redirect('/');
    }
  });
});

app.post('/logBtn', (req, res) => {
  res.redirect('/login');
});

app.post('/logout', (req, res) => {
  res.redirect('/');
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
        logStatus = false;
        afterLog = false;
        res.redirect('/users');
      });
    }
  });
});

app.listen(3000);
