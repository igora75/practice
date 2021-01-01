const express = require('express');
const expressHbs = require('express-handlebars');
const fs = require('fs');
// const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'views')));
app.engine('.hbs', expressHbs({ defaultLayout: false }));
app.set('view engine', '.hbs');
// app.get('/user', (req, res) => {
//   res.render('users', { users: usersArr });
// });
// app.get('/', (req, res) => {
//   res.render('main', { isOk: true, userName: 'Ivan' });
// });
// app.post('/login', ((req, res) => {
//   const { name, age } = req.body;
//   usersArr.push({ name, age });
//   res.redirect('/user');
// }));
let dataFile = {
  users: [],
};

app.get('/', (req, res) => {
  res.render('main');
});

app.post('/login', (req, res) => {
  // const { name, email, password } = req.body;
  fs.readFile('users.json', (err, data) => {
    if (err) throw err;
    dataFile = JSON.parse(data.toString());
    dataFile.users.push(req.body);
    fs.writeFile('users.json', JSON.stringify(dataFile), (error) => {
      if (error) throw error;
    });
  });

  res.json('OK');
});

app.listen(3000);
