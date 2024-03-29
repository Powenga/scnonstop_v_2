import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Fieldset from './Fieldset';
import styles from './OrderForm.module.css';
import { brandPropTypes, orderPropTypes } from '../../utils/prop-types';
import Input from '../Form/Input';

const FieldsetWithBrands = ({
  brandList,
  fieldsetStyle,
  values,
  handleChange,
  handleBrandClick,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBrandList, setFilteredBrandList] = useState(brandList);
  let inputRef = useRef(null);

  const handleFilterBrandsList = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setSearchQuery(value);
    setFilteredBrandList(() =>
      brandList.filter(({ title }) =>
        title.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  useEffect(() => {
    if (inputRef) {
      inputRef.focus();
    }
  }, []);

  return (
    <Fieldset
      title="Выберите марку техники"
      classes={`${styles.fieldset} ${fieldsetStyle}`}
    >
      <Input
        onChange={handleFilterBrandsList}
        id="ownBrandInput"
        type="text"
        placeholder="Начните вводить название марки"
        name="brand-filter"
        required={false}
        value={searchQuery}
      />
      <ul className={styles.brands}>
        {filteredBrandList.map((item, index) => (
          <li key={item.id} className="problem__item">
            <label
              htmlFor={item.id}
              className={`${styles.label} problem__text`}
            >
              <input
                ref={(element) => {
                  if (item.title === values.brand || index === 0) {
                    inputRef = element;
                  }
                }}
                id={item.id}
                type="radio"
                name="brand"
                value={item.title}
                onChange={handleChange}
                checked={item.title === values.brand}
                className={styles.input}
              />
              <span className={styles.problem}>{item.title}</span>
            </label>
          </li>
        ))}
        <li className="problem__item">
          <label
            title={values.ownBrand}
            htmlFor="problem_more"
            className={`${styles.label} problem__text`}
          >
            <input
              ref={(element) => {
                if (values.ownBrand && values.brand === values.ownBrand) {
                  inputRef = element;
                }
              }}
              id="problem_more"
              type="radio"
              name="brand"
              value={values.ownBrand}
              onChange={handleChange}
              checked={values.ownBrand && values.brand === values.ownBrand}
              className={styles.input}
              onClick={handleBrandClick}
            />
            <span className={styles.problem}>
              {values.ownBrand
                ? `${values.ownBrand.slice(0, 50).trim()}...`
                : 'Другая марка'}
            </span>
          </label>
        </li>
      </ul>
    </Fieldset>
  );
};

export default FieldsetWithBrands;

FieldsetWithBrands.propTypes = {
  brandList: PropTypes.arrayOf(brandPropTypes).isRequired,
  fieldsetStyle: PropTypes.string.isRequired,
  values: orderPropTypes.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBrandClick: PropTypes.func.isRequired,
};
