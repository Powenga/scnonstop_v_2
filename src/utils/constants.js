import wmPath from '../images/wm-crop.jpeg';
import dwPath from '../images/dw-crop.jpeg';
import refPath from '../images/ref.jpeg';
import boilPath from '../images/boil.jpeg';

import newsImagePath from '../images/news-image.jpg';
import news2 from '../images/news2.jpg';

import firstStageImgPath from '../images/scheme-1.png';
import secondStageImgPath from '../images/scheme-2.png';
import thirdStageImgPath from '../images/scheme-3.png';
import fourthStageImgPath from '../images/scheme-4.png';

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

export const schemeCards = [
  {
    alt: 'Первый этап',
    src: firstStageImgPath,
    content:
      'Обращаетесь к\u00a0нам удобным для вас способом - по\u00a0телефону, электронной почте или с\u00a0помощью формы на\u00a0сайте',
    stage: 1,
  },
  {
    alt: 'Второй этап',
    src: secondStageImgPath,
    content:
      'Мы связываетмся с\u00a0Вами и\u00a0уточняем детали и\u00a0время выполнения заказа',
    stage: 2,
    },
  {
    alt: 'Третий этап',
    src: thirdStageImgPath,
    content:
      'В назначенное время наш мастер приезжает к\u00a0Вам и\u00a0выполняет работы по диагностике и ремонту',
    stage: 3,
    },
  {
    alt: 'Четвертый этап',
    src: fourthStageImgPath,
    content:
      'Мастер передает Вам договор и\u00a0закрывающие документы, Вы оплачиваете полученные услуги',
    stage: 4
    },
];
