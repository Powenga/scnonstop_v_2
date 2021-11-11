import wmPath from '../images/wm-crop.jpeg';
import dwPath from '../images/dw-crop.jpeg';
import refPath from '../images/ref.jpeg';
import boilPath from '../images/boil.jpeg';

import formWmPath from '../images/form-wm.svg';
import formDwPath from '../images/form-dw.svg';
import formRefPath from '../images/form-ref.svg';
import formBoilPath from '../images/form-boil.svg';

export { priceList } from './data/price-list';
export { newsCards } from './data/news';
export { schemeCards } from './data/scheme';
export { advantages } from './data/advantages';
export { specs } from './data/specialists';

export const appliancesCards = [
  {
    title: 'Cтиральные машины',
    src: wmPath,
    value: 'Cтиральная машина',
    formSrc: formWmPath,
  },
  {
    title: 'Холодильники',
    src: refPath,
    value: 'Холодильник',
    formSrc: formRefPath,
  },
  {
    title: 'Посудомоечные машины',
    src: dwPath,
    value: 'Посудомоечная машина',
    formSrc: formDwPath,
  },
  {
    title: 'Водонагреватели',
    src: boilPath,
    value: 'Водонагреватель',
    formSrc: formBoilPath,
  },
];
