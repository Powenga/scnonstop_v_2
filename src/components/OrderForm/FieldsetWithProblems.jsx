import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Fieldset from './Fieldset';
import styles from './OrderForm.module.css';
import { orderStatePropTypes } from '../../utils/prop-types';

const FieldsetWithProblems = ({
  problemList,
  fieldsetStyle,
  values,
  handleChange,
  handleOwnProblemClick,
}) => {
  let inputRef = useRef(null);

  useEffect(() => {
    if (inputRef) {
      inputRef.focus();
    }
  }, []);

  return (
    <Fieldset
      title="Выберите неисправность"
      classes={`${styles.fieldset} ${fieldsetStyle}`}
    >
      <ul className="problem">
        {problemList.map((problem, index) => (
          <li key={problem} className="problem__item">
            <label
              htmlFor={`problem_${index}`}
              className={`${styles.label} problem__text`}
            >
              <input
                ref={(element) => {
                  if (index === 0) {
                    inputRef = element;
                  }
                }}
                id={`problem_${index}`}
                type="radio"
                name="problem"
                value={problem}
                onChange={handleChange}
                checked={problem === values.problem}
                className={styles.input}
              />
              <span className={styles.problem}>{problem}</span>
            </label>
          </li>
        ))}
        <li className="problem__item">
          <label
            title={values.ownProblem}
            htmlFor="problem_more"
            className={`${styles.label} problem__text`}
          >
            <input
              id="problem_more"
              type="radio"
              name="problem"
              value={values.ownProblem}
              onChange={handleChange}
              checked={
                values.ownProblem && values.problem === values.ownProblem
              }
              className={styles.input}
              onClick={handleOwnProblemClick}
            />
            <span className={styles.problem}>
              {values.ownProblem
                ? `${values.ownProblem.slice(0, 50).trim()}...`
                : 'Другая проблема'}
            </span>
          </label>
        </li>
      </ul>
    </Fieldset>
  );
};

export default FieldsetWithProblems;

FieldsetWithProblems.propTypes = {
  problemList: PropTypes.arrayOf(PropTypes.string).isRequired,
  fieldsetStyle: PropTypes.string.isRequired,
  values: orderStatePropTypes.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleOwnProblemClick: PropTypes.func.isRequired,
};
