import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './FileInput.module.css';

const FileInput = forwardRef(
  ({ id, fileName, name, required, classes, onChange }, ref) => {
    function handleChange(event) {
      onChange(event);
    }
    return (
      <label htmlFor={id} className={`${styles.label} ${classes}`}>
        <input
          id={id}
          type="file"
          name={name}
          ref={ref}
          required={required}
          className={styles.input}
          onChange={handleChange}
        />
        <span className={styles.pseudo} />
        <span className={styles.fileName}>{fileName}</span>
      </label>
    );
  },
);

FileInput.propTypes = {
  id: PropTypes.string.isRequired,
  fileName: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  classes: PropTypes.string,
  onChange: PropTypes.func,
};

FileInput.defaultProps = {
  required: false,
  classes: '',
  fileName: '',
  onChange: () => {},
};

export default FileInput;
