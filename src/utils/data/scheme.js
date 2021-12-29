import firstStageImgPath from '../../images/scheme-1.png';
import secondStageImgPath from '../../images/scheme-2.png';
import thirdStageImgPath from '../../images/scheme-3.png';
import fourthStageImgPath from '../../images/scheme-4.png';

import firstMobile from '../../images/scheme-1_large.png';
import secondMobile from '../../images/scheme-2_large.png';
import thirdMobile from '../../images/scheme-3_large.png';
import fourtMobile from '../../images/scheme-4_large.png';

const schemeCards = [
  {
    id: 1,
    alt: 'Первый этап',
    src: firstStageImgPath,
    srcMobile: firstMobile,
    content:
      'Обращаетесь к\u00a0нам удобным для вас способом - по\u00a0телефону, электронной почте или с\u00a0помощью формы на\u00a0сайте',
    stage: 1,
  },
  {
    id: 2,
    alt: 'Второй этап',
    src: secondStageImgPath,
    srcMobile: secondMobile,
    content:
      'Мы связываетмся с\u00a0Вами и\u00a0уточняем детали и\u00a0время выполнения заказа',
    stage: 2,
  },
  {
    id: 3,
    alt: 'Третий этап',
    src: thirdStageImgPath,
    srcMobile: thirdMobile,
    content:
      'В назначенное время наш мастер приезжает к\u00a0Вам и\u00a0выполняет работы по диагностике и ремонту',
    stage: 3,
  },
  {
    id: 4,
    alt: 'Четвертый этап',
    src: fourthStageImgPath,
    srcMobile: fourtMobile,
    content:
      'Мастер передает Вам договор и\u00a0закрывающие документы, Вы оплачиваете полученные услуги',
    stage: 4,
  },
];

export default schemeCards;
