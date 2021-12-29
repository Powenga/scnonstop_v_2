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

export { default as advantages } from './data/advantages';

export const { REACT_APP_API_URL = 'https://beta.scnonstop.ru/api' } =
  process.env;

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
export const MODAL_TYPES_CONFIRM_DELETE_NEWS =
  'MODAL_TYPES_CONFIRM_DELETE_NEWS';
export const MODAL_TYPES_CONFIRM_DELETE_SPEC =
  'MODAL_TYPES_CONFIRM_DELETE_SPEC';
export const MODAL_TYPES_ADD_NEWS = 'MODAL_TYPES_ADD_NEWS';
export const MODAL_TYPES_EDIT_NEWS = 'MODAL_TYPES_EDIT_NEWS';
export const MODAL_TYPES_SHOW_NEWS = 'MODAL_TYPES_SHOW_NEWS';
export const MODAL_TYPES_ADD_SPEC = 'MODAL_TYPES_ADD_SPEC';
export const MODAL_TYPES_EDIT_SPEC = 'MODAL_TYPES_EDIT_SPEC';
export const MODAL_TYPES_OWN_PROBLEM = 'MODAL_TYPES_OWN_PROBLEM';
export const MODAL_TYPES_OWN_BRAND = 'MODAL_TYPES_OWN_BRAND';

export const MODAL_TYPES_MORE = 'MODAL_TYPES_MORE';
