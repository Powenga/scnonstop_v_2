import PropTypes from 'prop-types';

export const appliancePropTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  formSrc: PropTypes.string.isRequired,
});

export const advatnagePropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  content: PropTypes.string,
});

export const newsPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
});

export const specsPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  link: PropTypes.string,
});

export const schemePropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  stage: PropTypes.number.isRequired,
});

export const orderPropTypes = PropTypes.PropTypes.shape({
  appType: PropTypes.string,
  problem: PropTypes.string,
  ownProblem: PropTypes.string,
  brand: PropTypes.string,
});

export const brandPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  appType: PropTypes.arrayOf(PropTypes.string).isRequired,
});
