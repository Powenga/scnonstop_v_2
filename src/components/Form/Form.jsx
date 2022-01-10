import React, { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Preloader from '../Preloader/Preloader';

const Form = forwardRef(
  ({ name, classes, onSubmit, children, errorMessage, isLoading }, ref) => {
    const [errorShouldShown, setErrorShouldShown] = useState(false);
    function hideError(event) {
      event.preventDefault();
      setErrorShouldShown(false);
    }

    useEffect(() => {
      if (errorMessage) {
        setErrorShouldShown(true);
      }
    }, [isLoading, errorMessage]);

    return (
      <form
        ref={ref}
        name={name}
        className={`form ${classes || ''}`}
        noValidate
        onSubmit={onSubmit}
      >
        {children}
        {errorShouldShown && (
          <div className="form__error">
            <button
              onClick={hideError}
              type="button"
              className="form__error-close"
              aria-label="закрыть"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="9.94971"
                  y="8.53516"
                  width="2"
                  height="12"
                  transform="rotate(135 9.94971 8.53516)"
                  fill="#585858"
                />
                <rect
                  x="1.46436"
                  y="9.9502"
                  width="2"
                  height="12"
                  transform="rotate(-135 1.46436 9.9502)"
                  fill="#585858"
                />
              </svg>
            </button>
            <p className="form__error-text">{errorMessage}</p>
          </div>
        )}
        {isLoading && <Preloader />}
      </form>
    );
  },
);

Form.propTypes = {
  name: PropTypes.string.isRequired,
  classes: PropTypes.string,
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  isLoading: PropTypes.bool,
};

Form.defaultProps = {
  errorMessage: '',
  classes: '',
  isLoading: false,
};

export default Form;
