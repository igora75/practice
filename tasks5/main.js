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