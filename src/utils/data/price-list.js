import {
  BOILER,
  BOILER_TITLE,
  DISHWASHER,
  DISHWASHER_TITLE,
  REFRIGETATOR,
  REFRIGETATOR_TITLE,
  WASHING_MACHINE,
  WASHING_MACHINE_TITLE,
} from '../constants';

const priceList = [
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

export default priceList;
