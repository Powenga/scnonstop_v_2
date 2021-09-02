import wmPath from '../images/wm-crop.jpeg';
import dwPath from '../images/dw-crop.jpeg';
import refPath from '../images/ref.jpeg';
import boilPath from '../images/boil.jpeg';

import newsImagePath from '../images/news-image.jpg';
import news2 from '../images/news2.jpg'

export const appliancesCards = [
  {
    title: 'Cтиральные машины',
    src: wmPath,
    value: 'Cтиральная машина',
  },
  {
    title: 'Холодильники',
    src: refPath,
    value: 'Холодильник',
  },
  {
    title: 'Посудомоечные машины',
    src: dwPath,
    value: 'Посудомоечная машина',
  },
  {
    title: 'Водонагреватели',
    src: boilPath,
    value: 'Водонагреватель',
  },
];

export const newsCards = [
  {
    title: 'Бесплатная чистка стиральных машин!',
    src: newsImagePath,
    date: '24.05.2021',
    content:
      'С 25 мая по 1 сентября 2021 года в стоимость ремонта включена промывка и чистка стиральных машин любых марок!',
  },
  {
    title: 'Скидка 10% на первый заказ!',
    src: news2,
    date: '24.05.2021',
    content:
      'Текст должен быть длинным, чтобы выровнять дату. Минимум три строки. Лишний текст будет ограничен програм...',
  },
  {
    title: 'Название новости в две строки.',
    src: newsImagePath,
    date: '24.05.2021',
    content:
      'С 25 мая по 1 сентября 2021 года в стоимость ремонта включена промывка и чистка стиральных машин любых марок!',
  },
];
