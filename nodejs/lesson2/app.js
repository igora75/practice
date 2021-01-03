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

app.get('/', (req, res) => {
  res.render('main');
});

app.get('/error', ((req, res) => {
  res.render('error', { error: 'Email already exists' });
}));

app.post('/login', (req, res) => {
  let dataFile = {
    users: [],
  };
  const { email } = req.body;
  fs.readFile('users.json', (err, data) => {
    if (err) throw err;
    dataFile = JSON.parse(data.toString());
    const result = dataFile.users.find((item) => item.email === email);
    if (result) {
      res.redirect('/error');
    } else {
      dataFile.users.push(req.body);
      const jsonStr = JSON.stringify(dataFile, null, 2);
      fs.writeFile('users.json', jsonStr, (error) => {
        if (error) throw error;
        res.json(dataFile.users);
      });
    }
  });
});

app.listen(3000);
