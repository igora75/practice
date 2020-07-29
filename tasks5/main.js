//Створити функцію конструктор для об'єкту який описує теги
//Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
//Кожен атрибут описати як окремий який буде містити
//-назву атрибуту
//-опис дії атрибуту
//інформацію брати з htmlbook.ru

//Таким чином описати теги
//-a
//-div
//-h1
//-span
//-input
//-form
//-option
//-select

function Tags(titleofTag, action, title1, action1, title2, action2) {
  this.titleofTag = titleofTag;
  this.action = action;
  this.attrs = [{ titleofAttr: title1, actionofAttr: action1 },
  { titleofAttr: title2, actionofAttr: action2 }];

}
let tagA = new Tags('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
  'href', 'Задает адрес документа, на который следует перейти.', 'name', 'Устанавливает имя якоря внутри документа.');

let tagDiv = new Tags('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
  'title', 'Добавляет всплывающую подсказку к содержимому.', 'align', 'Задает выравнивание содержимого тега <div>.');

let tagH1 = new Tags('h1', 'тег <h1> представляет собой наиболее важный заголовок первого уровня',
  'align', 'Определяет выравнивание заголовка.');

let tagSpan = new Tags('span', 'Тег <span> предназначен для определения строчных элементов документа');

let tagInput = new Tags('input', 'Главным образом <input> предназначен для создания текстовых полей',
  'alt', 'Альтернативный текст для кнопки с изображением.', 'autofocus',
  'Устанавливает фокус в поле формы');

let tagForm = new Tags('form', 'Тег <form> устанавливает форму на веб-странице.', 'autocomplete',
  'Включает автозаполнение полей формы.', 'name', 'Имя формы.');

let tagOption = new Tags('option', 'Тег <option> определяет отдельные пункты списка', 'disabled',
  'Заблокировать для доступа элемент списка.', 'label', 'Указание метки пункта списка.');

let tagSelect = new Tags('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка',
  'disabled', 'Блокирует доступ и изменение элемента.', 'size', 'Количество отображаемых строк списка.');

//Створити класс  для об'єкту який описує теги
//Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
//Кожен атрибут описати як окремий який буде містити
//-назву атрибуту
//-опис дії атрибуту
//інформацію брати з htmlbook.ru

//Таким чином описати теги
//-a
//-h1
//-div
//-span
//-input
//-form
//-option
//-select

class TagClass {
  constructor(titleofTag, action, title1, action1, title2, action2) {
    this.titleofTag = titleofTag;
    this.action = action;
    this.attrs = [{ titleofAttr: title1, actionofAttr: action1 },
    { titleofAttr: title2, actionofAttr: action2 }];
  }
}

let A = new TagClass('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
  'href', 'Задает адрес документа, на который следует перейти.', 'name', 'Устанавливает имя якоря внутри документа.');

let H1 = new TagClass('h1', 'тег <h1> представляет собой наиболее важный заголовок первого уровня',
  'align', 'Определяет выравнивание заголовка.');

let Div = new TagClass('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
  'title', 'Добавляет всплывающую подсказку к содержимому.', 'align', 'Задает выравнивание содержимого тега <div>.');

let Span = new TagClass('span', 'Тег <span> предназначен для определения строчных элементов документа');

let Input = new TagClass('input', 'Главным образом <input> предназначен для создания текстовых полей',
  'alt', 'Альтернативный текст для кнопки с изображением.', 'autofocus',
  'Устанавливает фокус в поле формы');

let Form = new TagClass('form', 'Тег <form> устанавливает форму на веб-странице.', 'autocomplete',
  'Включает автозаполнение полей формы.', 'name', 'Имя формы.');

let Option = new TagClass('option', 'Тег <option> определяет отдельные пункты списка', 'disabled',
  'Заблокировать для доступа элемент списка.', 'label', 'Указание метки пункта списка.');

let Select = new TagClass('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка',
  'disabled', 'Блокирует доступ и изменение элемента.', 'size', 'Количество отображаемых строк списка.');

//Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
let car = {
  model: 'camry',
  firm: 'toyota',
  year: 2015,
  speed: 215,
  engine: 2500,

  drive: function () {
    console.log(`їдемо зі швидкістю ${this.speed} на годину`);
  },

  info: function () {
    console.log(`${this.model}\n${this.firm}\n${this.year}\n${this.speed}\n${this.engine}`);
  },

  increaseMaxSpeed: function (newSpeed) {
    this.speed += newSpeed;
    return this.speed;
  },

  changeYear: function (newValue) {
    this.year += newValue;
    return this.year;
  },

  addDriver: function (driver) {
    this.driver = driver;
  }
}

//Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
