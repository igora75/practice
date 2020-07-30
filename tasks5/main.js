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

  drive() {
    console.log(`їдемо зі швидкістю ${this.speed} на годину`);
  },

  info() {
    console.log(`${this.model}\n${this.firm}\n${this.year}\n${this.speed}\n${this.engine}`);
  },

  increaseMaxSpeed(newSpeed) {
    this.speed += newSpeed;
    return this.speed;
  },

  changeYear(newValue) {
    this.year += newValue;
    return this.year;
  },

  addDriver(driver) {
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
function CreateCar(model, firm, year, speed, engine) {
  this.model = model,
    this.firm = firm,
    this.year = year,
    this.speed = speed,
    this.engine = engine,

    this.drive = function () {
      console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    },

    this.info = function () {
      console.log(`${this.model}\n${this.firm}\n${this.year}\n${this.speed}\n${this.engine}`);
    },

    this.increaseMaxSpeed = function (newSpeed) {
      this.speed += newSpeed;
      return this.speed;
    },

    this.changeYear = function (newValue) {
      this.year += newValue;
      return this.year;
    },

    this.addDriver = function (driver) {
      this.driver = driver;
    }
}

//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, 
//рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
class CarCreate {
  constructor(model, firm, year, speed, engine) {
    this.model = model,
      this.firm = firm,
      this.year = year,
      this.speed = speed,
      this.engine = engine
  }
  drive() {
    console.log(`їдемо зі швидкістю ${this.speed} на годину`);
  }

  info() {
    console.log(`${this.model}\n${this.firm}\n${this.year}\n${this.speed}\n${this.engine}`);
  }

  increaseMaxSpeed(newSpeed) {
    this.speed += newSpeed;
    return this.speed;
  }

  changeYear(newValue) {
    this.year += newValue;
    return this.year;
  }

  addDriver(driver) {
    this.driver = driver;
  }

}

//створити класс попелюшка з полями ім'я, вік, розмір ноги
//--Створити 10 попелюшок , покласти їх в масив
//--Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//-- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
class Cinderella {
  constructor(name, age, sizeLeg) {
    this.name = name,
      this.age = age,
      this.sizeLeg = sizeLeg
  }
}
let cinArr = [new Cinderella('tina', 25, 35),
new Cinderella('nadia', 17, 36),
new Cinderella('tania', 22, 38),
new Cinderella('olia', 23, 39),
new Cinderella('oksana', 18, 34),
new Cinderella('natalia', 28, 40),
new Cinderella('katia', 35, 37),
new Cinderella('vika', 21, 37),
new Cinderella('lida', 20, 36),
new Cinderella('natalia', 19, 41)];

class Prince {
  constructor(name, age, sizeShoe) {
    this.name = name,
      this.age = age,
      this.sizeShoe = sizeShoe
  }
}
let prince = new Prince('Ihor', 23, 36);


for (let cin of cinArr) {
  if (cin.sizeLeg === prince.sizeShoe) {
    console.log(cin);
  }
}

//створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
//Створити 10 попелюшок , покласти їх в масив
//Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, 
//туфелька яку він знайшов, та функцію "пошук попелюшки"
//функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
class Cinderella1 {
  constructor(name, age, sizeLeg) {
    this.name = name,
      this.age = age,
      this.sizeLeg = sizeLeg
  }
}
let cinArr1 = [new Cinderella1('tina', 25, 35),
new Cinderella1('nadia', 17, 36),
new Cinderella1('tania', 22, 38),
new Cinderella1('olia', 23, 39),
new Cinderella1('oksana', 18, 34),
new Cinderella1('natalia', 28, 40),
new Cinderella1('katia', 35, 37),
new Cinderella1('vika', 21, 37),
new Cinderella1('lida', 20, 36),
new Cinderella1('natalia', 19, 41)];

class Prince1 {
  constructor(name, age, sizeShoe) {
    this.name = name,
      this.age = age,
      this.sizeShoe = sizeShoe
  }

  searchCin(arr) {
    for (let cin of arr) {
      if (cin.sizeLeg === prince1.sizeShoe) {
        console.log(cin);
      }
    }
  }
}
let prince1 = new Prince1('Ihor', 23, 39);

prince1.searchCin(cinArr1);


