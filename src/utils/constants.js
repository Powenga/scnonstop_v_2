import wmPath from '../images/wm-crop.jpeg';
import dwPath from '../images/dw-crop.jpeg';
import refPath from '../images/ref.jpeg';
import boilPath from '../images/boil.jpeg';

import formWmPath from '../images/form-wm.svg';
import formDwPath from '../images/form-dw.svg';
import formRefPath from '../images/form-ref.svg';
import formBoilPath from '../images/form-boil.svg';

export { default as priceList } from './data/price-list';
export { default as schemeCards } from './data/scheme';
export { default as advantages } from './data/advantages';

export const { REACT_APP_API_URL = 'https://beta.scnonstop.ru/api' } = process.env;

export const appliancesCards = [
  {
    id: 1,
    title: 'Cтиральные машины',
    src: wmPath,
    value: 'Cтиральная машина',
    formSrc: formWmPath,
  },
  {
    id: 2,
    title: 'Холодильники',
    src: refPath,
    value: 'Холодильник',
    formSrc: formRefPath,
  },
  {
    id: 3,
    title: 'Посудомоечные машины',
    src: dwPath,
    value: 'Посудомоечная машина',
    formSrc: formDwPath,
  },
  {
    id: 4,
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
