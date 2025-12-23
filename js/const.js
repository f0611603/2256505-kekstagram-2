export const STEP_COMMENTS = 5;
export const MAX_DESCRIPTION = 140;
export const HASHTAG_FORMULA = /^#[a-zа-я0-9]{1,19}$/i;
export const MAX_HASHTAG_COUNT = 5;
export const Scale = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
  DEFAULT: 100
};

export const Effects = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

/*
Для эффекта «Хром» — filter: grayscale(0..1) с шагом 0.1;
Для эффекта «Сепия» — filter: sepia(0..1) с шагом 0.1;
Для эффекта «Марвин» — filter: invert(0..100%) с шагом 1%;
Для эффекта «Фобос» — filter: blur(0..3px) с шагом 0.1px;
Для эффекта «Зной» — filter: brightness(1..3) с шагом 0.1;
*/
export const EffectSettings = {
  [Effects.CHROME]: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    style: 'grayscale',
    units: ''
  },

  [Effects.NONE]: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    style: '',
    units: ''
  },


  [Effects.SEPIA]: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    style: 'sepia',
    units: ''
  },

  [Effects.MARVIN]: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    style: 'invert',
    units: '%'
  },

  [Effects.PHOBOS]: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    style: 'blur',
    units: 'px'
  },

  [Effects.HEAT]: {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
    style: 'brightness',
    units: ''
  },
};


const DESCRIPTIONS = [
  'Вид на пляж отеля',
  'Дорога к пляжу',
  'Лазурный берег',
  'Девушка с фотоаппаратом',
  'Ванная для рисовых человечков',
  'Черная машина',
  'Две половинки клубники',
  'Две кружки морса',
  'Смотри! Самолет',
  'Место для обуви',
  'Проход к морю',
  'Ауди',
  'Экзотическое блюдо',
  'Рол с котенком',
  'Космические тапки',
  'Небесный океан',
  'Грандиозный хор',
  'Ретро автомобиль',
  'Тапочки с подсветкой',
  'Пальмы в отеле',
  'Блюдо из курицы',
  'Закат на море',
  'Краб',
  'Руки вверх',
  'В брод через реку с бегемотами'
];

const MESSAGES_TEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const AVTOR_NAMES = [
  'Михаил',
  'Александр',
  'Артём',
  'Матвей',
  'Тимофей',
  'Максим',
  'Лев',
  'Марк',
  'Иван',
  'Дмитрий',
  'Мирон',
  'София',
  'Ева',
  'Анна',
  'Мария',
  'Варвара',
  'Василиса',
  'Виктория',
  'Александра',
  'Полина',
  'Елизавета'
];

const LIKES_MIN_AMOUNT = 15;
const LIKES_MAX_AMOUNT = 200;

const AVATAR_ID_MIN_ = 1;
const AVATAR_ID_MAX = 6;

const COMMENTS_MIN_AMOUNT = 0;
const COMMENTS_MAX_AMOUNT = 30;
const COMMENTS_MAX_ID = 30000;

const CADRS_AMOUNT = 25;

export { DESCRIPTIONS, MESSAGES_TEXT, AVTOR_NAMES, LIKES_MIN_AMOUNT, LIKES_MAX_AMOUNT, AVATAR_ID_MIN_, AVATAR_ID_MAX, COMMENTS_MIN_AMOUNT, COMMENTS_MAX_AMOUNT, COMMENTS_MAX_ID, CADRS_AMOUNT };

