import React from 'react';
import PropTypes from 'prop-types';

export default function Form({
  name, classes, onSubmit, children,
}) {
  return (
    <form
      name={name}
      className={`form ${classes}`}
      noValidate
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

Form.propTypes = {
  name: PropTypes.func.isRequired,
  classes: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
