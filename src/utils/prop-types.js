import PropTypes from 'prop-types';

export default PropTypes.shape({
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  formSrc: PropTypes.string.isRequired,
});
