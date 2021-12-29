import warrantyPath from '../../images/advantages/warranty.svg';
import homePath from '../../images/advantages/home.svg';
import partsPath from '../../images/advantages/parts.svg';
import timePath from '../../images/advantages/time.svg';
import specialistsPath from '../../images/advantages/specialists.svg';

const advantages = [
  {
    id: 1,
    title: 'Гарантия до 1 года',
    src: warrantyPath,
    content:
      'После ремонтных работ мастер выдает документы, подтверждающие ваше право на гарантийный ремонт. Гарантия на ремонт электроники до 3 месяцев, на остальные виды работ до 1 года.',
  },
  {
    id: 2,
    title: 'Выезд на дом',
    src: homePath,
    content:
      'Мастера выезжают на дом по городу Липецку и Липецкой области. Стоимость диагностики 500 рублей, если ремонт выполняет наш мастер, то диагностика бесплатно. Цена 1 км пути за пределами города Липецка составляет 20 рублей.',
  },
  {
    id: 3,
    title: 'Оригинальные запчасти',
    src: partsPath,
    content:
      'Мастера Сервисного центра NON-STOP для ремонта бытовой техники используют только оригинальные запчасти, сертифицированные производителями бытовой техники.',
  },
  {
    id: 4,
    title: 'Удобное время',
    src: timePath,
    content:
      'Сервисный центр NON-STOP работает ежедневно с 9:00 до 22:00, без выходных, поэтому наши клиенты имеют возможность договориться о времени с мастером в любое удобное время.',
  },
  {
    id: 5,
    title: 'Опытные мастера',
    src: specialistsPath,
    content:
      'У нас работают специалисты с подтвержденным опытом, каждый из них занимается ремонтом бытовой техники более 5 лет.',
  },
];

export default advantages;
