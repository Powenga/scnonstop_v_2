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

export const { REACT_APP_API_URL = 'https://scnonstop.ru/api' } = process.env;

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

export const MODAL_ROOT_SELECTOR = '#modal';
export const ESC_KEY = 'Escape';
export const MODAL_TYPES_NEWS = 'MODAL_TYPES_NEWS';
export const MODAL_TYPES_SPECS = 'MODAL_TYPES_SPECS';
export const MODAL_TYPES_PRELOADER = 'MODAL_TYPES_PRELOADER';
