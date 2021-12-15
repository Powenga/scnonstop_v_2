import wmPath from '../images/wm-crop.jpeg';
import dwPath from '../images/dw-crop.jpeg';
import refPath from '../images/ref.jpeg';
import boilPath from '../images/boil.jpeg';

import formWmPath from '../images/form-wm.svg';
import formDwPath from '../images/form-dw.svg';
import formRefPath from '../images/form-ref.svg';
import formBoilPath from '../images/form-boil.svg';

export const WASHING_MACHINE = 'Стиральная машина';
export const REFRIGETATOR = 'Холодильник';
export const DISHWASHER = 'Посудомоечная машина';
export const BOILER = 'Водонагреватель';

export const WASHING_MACHINE_TITLE = 'Стиральные машины';
export const REFRIGETATOR_TITLE = 'Холодильники';
export const DISHWASHER_TITLE = 'Посудомоечные машины';
export const BOILER_TITLE = 'Водонагреватели';

export { default as schemeCards } from './data/scheme';
export { default as advantages } from './data/advantages';

export const { REACT_APP_API_URL = 'https://beta.scnonstop.ru/api' } = process.env;

export const appliancesCards = [
  {
    id: 1,
    title: WASHING_MACHINE_TITLE,
    src: wmPath,
    value: WASHING_MACHINE,
    formSrc: formWmPath,
  },
  {
    id: 2,
    title: REFRIGETATOR_TITLE,
    src: refPath,
    value: REFRIGETATOR,
    formSrc: formRefPath,
  },
  {
    id: 3,
    title: DISHWASHER_TITLE,
    src: dwPath,
    value: DISHWASHER,
    formSrc: formDwPath,
  },
  {
    id: 4,
    title: BOILER_TITLE,
    src: boilPath,
    value: BOILER,
    formSrc: formBoilPath,
  },
];

export const newsRenderPrefs = {
  desktop: {
    rows: 1,
    numberPerRow: 3,
  },
  tabletPortrait: {
    resolution: 964,
    rows: 1,
    numberPerRow: 2,
  },
  mobile: {
    resolution: 550,
    rows: 1,
    numberPerRow: 1,
  },
};

export const specsRenderPrefs = {
  desktop: {
    rows: 1,
    numberPerRow: 3,
  },
  mobile: {
    resolution: 550,
    rows: 1,
    numberPerRow: 2,
  },
};

export const MODAL_ROOT_SELECTOR = '#modal';
export const ESC_KEY = 'Escape';
export const MODAL_TYPES_PRELOADER = 'MODAL_TYPES_PRELOADER';
export const MODAL_TYPES_CONFIRM_DELETE_NEWS = 'MODAL_TYPES_CONFIRM_DELETE_NEWS';
export const MODAL_TYPES_CONFIRM_DELETE_SPEC = 'MODAL_TYPES_CONFIRM_DELETE_SPEC';
export const MODAL_TYPES_ADD_NEWS = 'MODAL_TYPES_ADD_NEWS';
export const MODAL_TYPES_EDIT_NEWS = 'MODAL_TYPES_EDIT_NEWS';
export const MODAL_TYPES_SHOW_NEWS = 'MODAL_TYPES_SHOW_NEWS';
export const MODAL_TYPES_ADD_SPEC = 'MODAL_TYPES_ADD_SPEC';
export const MODAL_TYPES_EDIT_SPEC = 'MODAL_TYPES_EDIT_SPEC';

export const priceList = [
  {
    id: WASHING_MACHINE,
    title: WASHING_MACHINE_TITLE,
    content: [
      {
        id: 1,
        problem: 'Не включается',
        price: 'от 500 р.',
      },
      {
        id: 2,
        problem: 'Не набирает нужную температуру',
        price: 'от 800 р.',
      },
      {
        id: 3,
        problem: 'Покрывается льдом',
        price: 'от 1500 р.',
      },
      {
        id: 4,
        problem: 'Посторонний шум',
        price: 'от 2500 р.',
      },
      {
        id: 5,
        problem: 'Не работает дисплей',
        price: 'от 5000 р.',
      },
      {
        id: 6,
        problem: 'Дисплей показывает неверную информацию',
        price: 'от 1200 р.',
      },
      {
        id: 7,
        problem: 'Морозильная камера не морозит',
        price: 'от 800 р.',
      },
      {
        id: 8,
        problem: 'Работает только морозильная камера',
        price: 'от 200 р.',
      },
      {
        id: 9,
        problem: 'Посторонний запах',
        price: 'от 500 р.',
      },
    ],
  },
  {
    id: REFRIGETATOR,
    title: REFRIGETATOR_TITLE,
    content: [
      {
        id: 1,
        problem: 'Проблема холодильников',
        price: 'от 500 р.',
      },
      {
        id: 2,
        problem: 'Проблема холодильников',
        price: 'от 2500 р.',
      },
      {
        id: 3,
        problem: 'Проблема холодильников',
        price: 'от 5200 р.',
      },
      {
        id: 4,
        problem: 'Проблема холодильников',
        price: 'от 1500 р.',
      },
      {
        id: 5,
        problem: 'Проблема холодильников',
        price: 'от 8500 р.',
      },
      {
        id: 6,
        problem: 'Проблема холодильников',
        price: 'от 500 р.',
      },
      {
        id: 7,
        problem: 'Проблема холодильников',
        price: 'от 5000 р.',
      },
    ],
  },
  {
    id: DISHWASHER,
    title: DISHWASHER_TITLE,
    content: [
      {
        id: 1,
        problem: 'Проблема посудомоек',
        price: 'от 500 р.',
      },
      {
        id: 2,
        problem: 'Проблема посудомоек',
        price: 'от 2500 р.',
      },
      {
        id: 3,
        problem: 'Проблема посудомоек',
        price: 'от 5200 р.',
      },
      {
        id: 4,
        problem: 'Проблема посудомоек',
        price: 'от 1500 р.',
      },
      {
        id: 5,
        problem: 'Проблема посудомоек',
        price: 'от 8500 р.',
      },
      {
        id: 6,
        problem: 'Проблема посудомоек',
        price: 'от 500 р.',
      },
      {
        id: 7,
        problem: 'Проблема посудомоек',
        price: 'от 5000 р.',
      },
      {
        id: 8,
        problem: 'Проблема посудомоек',
        price: 'от 5000 р.',
      },
      {
        id: 9,
        problem: 'Проблема посудомоек',
        price: 'от 5000 р.',
      },
      {
        id: 10,
        problem: 'Проблема посудомоек',
        price: 'от 5000 р.',
      },
      {
        id: 11,
        problem: 'Проблема посудомоек',
        price: 'от 5000 р.',
      },
      {
        id: 12,
        problem: 'Проблема посудомоек',
        price: 'от 5000 р.',
      },
      {
        id: 13,
        problem: 'Проблема посудомоек',
        price: 'от 5000 р.',
      },
    ],
  },
  {
    id: BOILER,
    title: BOILER_TITLE,
    content: [
      {
        id: 1,
        problem: 'Проблема водонагревателей',
        price: 'от 500 р.',
      },
      {
        id: 2,
        problem: 'Проблема водонагревателей',
        price: 'от 2500 р.',
      },
      {
        id: 3,
        problem: 'Проблема водонагревателей',
        price: 'от 5200 р.',
      },
      {
        id: 4,
        problem: 'Проблема водонагревателей',
        price: 'от 1500 р.',
      },
      {
        id: 5,
        problem: 'Проблема водонагревателей',
        price: 'от 8500 р.',
      },
      {
        id: 6,
        problem: 'Проблема водонагревателей',
        price: 'от 500 р.',
      },
      {
        id: 7,
        problem: 'Проблема водонагревателей',
        price: 'от 5000 р.',
      },
    ],
  },
];
