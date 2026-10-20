const translations = {
  ru: {
    passgivenpl: 'УФМС РОССИИ ПО ГОР. МОСКВЕ<br>ПО РАЙОНУ X',
    fio: 'Жукова',
    name: 'Василиса',
    s_name: 'Алексеевна',
    data_b: 'Жен &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 03.10.2007',
    b_place: 'г. Москва',
    button: 'Поменять на английский',
    lang: 'ru'
  },
  en: {
    passgivenpl: 'FEDERAL MIGRATION SERVICE<br>OF RUSSIA, MOSCOW, DISTRICT X',
    fio: 'Zhukova',
    name: 'Vasilisa',
    s_name: 'Alekseevna',
    data_b: 'Fem &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 03.10.2007',
    b_place: 'Moscow',
    button: 'Поменять на русский',
    lang: 'en'
  }
};

let currentLanguage = 'ru';

document.getElementById('change').addEventListener('click', () => {
  currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';

  const text = translations[currentLanguage];

  document.getElementById('passgivenpl').innerHTML = text.passgivenpl;
  document.getElementById('fio').textContent = text.fio;
  document.getElementById('name').textContent = text.name;
  document.getElementById('s_name').textContent = text.s_name;
  document.getElementById('data_b').innerHTML = text.data_b;
  document.getElementById('b_place').textContent = text.b_place;
  document.getElementById('change').textContent = text.button;

  document.documentElement.lang = text.lang;
});
