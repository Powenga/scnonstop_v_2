import React from 'react';
import PropTypes from 'prop-types';
import Fieldset from './Fieldset';
import styles from './OrderForm.module.css';
import { orderStatePropTypes } from '../../utils/prop-types';

const FieldsetWithOrder = ({ values, fieldsetStyle }) => {
  return (
    <Fieldset
      title="Проверьте данные"
      classes={`${styles.fieldset} ${fieldsetStyle}`}
    >

      {values.appType}
      {values.problem}
      {values.brand}
      {values.userName}
      {values.userPhone}
      {values.userAddress}
    </Fieldset>
  );
};

export default FieldsetWithOrder;

FieldsetWithOrder.propTypes = {
  fieldsetStyle: PropTypes.string.isRequired,
  values: orderStatePropTypes.isRequired,
};
