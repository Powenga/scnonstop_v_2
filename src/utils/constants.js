import wmPath from '../images/wm-crop.jpeg';
import dwPath from '../images/dw-crop.jpeg';
import refPath from '../images/ref.jpeg';
import boilPath from '../images/boil.jpeg';

export { priceList } from './data/price-list';
export { newsCards } from './data/news';
export { schemeCards } from './data/scheme';
export { advantages } from './data/advantages';

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

