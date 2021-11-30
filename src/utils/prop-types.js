import PropTypes from 'prop-types';

export const appliancePropTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  formSrc: PropTypes.string.isRequired,
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
  age: PropTypes.number.isRequired,
  about: PropTypes.string.isRequired,
  link: PropTypes.string,
});
