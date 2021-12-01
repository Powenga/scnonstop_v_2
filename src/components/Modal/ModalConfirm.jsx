import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Preloader from '../Preloader/Preloader';
import { newsPropTypes } from '../../utils/prop-types';

export default function ModalConfirm({
  title,
  data,
  confirmMessage,
  onConfirm,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleConfirm = (event) => {
    event.preventDefault();
    setIsLoading(true);
    onConfirm(data)
      .then(() => {
        setIsSuccess(true);
      })
      .catch(() => {
        setErrorMessage('Что-то пошло не так!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleCancel = (event) => {
    event.preventDefault();
  };

  if (isSuccess) {
    return <p>{confirmMessage}</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return (
    <>
      <h2>{title}</h2>
      <Button type="button" onButtonClick={handleConfirm}>
        Да
      </Button>
      <Button type="button" onButtonClick={handleCancel}>
        Отмена
      </Button>
      {isLoading && <Preloader />}
    </>
  );
}

ModalConfirm.propTypes = {
  title: PropTypes.string.isRequired,
  data: newsPropTypes,
  confirmMessage: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

ModalConfirm.defaultProps = {
  data: {},
};
