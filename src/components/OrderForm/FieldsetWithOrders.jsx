import React from 'react';
import PropTypes from 'prop-types';
import Fieldset from './Fieldset';
import styles from './OrderForm.module.css';
import { orderPropTypes } from '../../utils/prop-types';

const FieldsetWithOrder = ({ values, fieldsetStyle }) => {
  return (
    <Fieldset
      title="Проверьте данные"
      classes={`${styles.fieldset} ${fieldsetStyle}`}
    >
      <div>
        <p className={styles['data-subtitle']}>Тип техники:</p>
        <p className={`${styles['data-text']} main-text`}>{values.appType}</p>
      </div>
      <div>
        <p className={styles['data-subtitle']}>Неисправность:</p>
        <p className={`${styles['data-text']} main-text`}>{values.problem}</p>
      </div>
      <div>
        <p className={styles['data-subtitle']}>Марка техники:</p>
        <p className={`${styles['data-text']} main-text`}>{values.brand}</p>
      </div>
      <div>
        <p className={styles['data-subtitle']}>Имя:</p>
        <p className={`${styles['data-text']} main-text`}>{values.userName}</p>
      </div>
      <div>
        <p className={styles['data-subtitle']}>Телефон:</p>
        <p className={`${styles['data-text']} main-text`}>{values.userPhone}</p>
      </div>
      <div>
        <p className={styles['data-subtitle']}>Адрес:</p>
        <p className={`${styles['data-text']} main-text`}>
          {values.userAddress}
        </p>
      </div>
    </Fieldset>
  );
};

export default FieldsetWithOrder;

FieldsetWithOrder.propTypes = {
  fieldsetStyle: PropTypes.string.isRequired,
  values: orderPropTypes.isRequired,
};
