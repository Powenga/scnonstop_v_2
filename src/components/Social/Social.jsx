import React from 'react';
import PropTypes from 'prop-types';
import './Social.css';

function Social({ classes, children }) {
  return (
    <>
      <div className={`social ${classes && classes}`}>{children}</div>
    </>
  );
}

export default Social;

Social.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

Social.defaultProps = {
  classes: '',
};
