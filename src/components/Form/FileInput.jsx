import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileInput = forwardRef(
  ({
    name,
    required,
    classes,
    onChange,
  }, ref) => {
    function handleChange(event) {
      onChange(event);
    }
    return (
      <input
        type="file"
        name={name}
        ref={ref}
        required={required}
        className={classes}
        onChange={handleChange}
      />
    );
  },
);

FileInput.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  classes: PropTypes.string,
  onChange: PropTypes.func,
};

FileInput.defaultProps = {
  required: false,
  classes: '',
  onChange: () => {},
};

export default FileInput;
