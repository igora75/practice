const usersArr = [
  { name: 'Ivan', age: 22 },
  { name: 'Ira', age: 17 },
];
const express = require('express');
const expressHbs = require('express-handlebars');
// const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'views')));
app.engine('.hbs', expressHbs({ defaultLayout: false }));
app.set('view engine', '.hbs');
app.get('/user', (req, res) => {
  res.render('users', { users: usersArr });
});
// app.get('/', (req, res) => {
//
// });
app.listen(3000, () => {
});
