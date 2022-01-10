import React, { useCallback, useContext, useRef, useState } from 'react';
import Form from './Form';
import Input from './Input';
import api from '../../utils/main-api';
import Button from '../Button/Button';
import Preloader from '../Preloader/Preloader';
import modalContext from '../../context/modal-context';
import SectionTitle from '../SectionTitle/SectionTitle';
import FileInput from './FileInput';
import { specsPropTypes } from '../../utils/prop-types';

export default function EditSpecForm({ spec }) {
  const formData = new FormData();
  const { id, name: specName, about } = spec;
  const [, setModalState] = useContext(modalContext);
  const [values, setValues] = useState({
    specName,
    about,
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  const handleChange = useCallback((event) => {
    if (formRef.current) {
      formRef.current.checkValidity();
      setIsValid(formRef.current.checkValidity());
    }
    const { target } = event;
    if (target.type === 'file') {
      if (fileInputRef.current) {
        setFileName(
          fileInputRef.current.files[0]
            ? fileInputRef.current.files[0].name
            : '',
        );
      }
      return;
    }
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    setValues((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  const handleSubmit = (event) => {
    setIsLoading(true);
    formData.append('specialist-avatar', fileInputRef.current.files[0]);
    event.preventDefault();
    api
      .editSpec({ id, ...values, name: values.specName }, formData, fileName)
      .then(() => {
        setIsLoading(false);
        setModalState({
          isOpen: false,
          modalType: null,
        });
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(error.message);
      });
  };

  return (
    <Form
      ref={formRef}
      name="editSpecForm"
      onSubmit={handleSubmit}
      errorMessage={errorMessage}
    >
      <SectionTitle
        title="Редактирование данных мастера"
        subtitle="Введите данные для редактирования"
      />
      <FileInput
        id="editSpecsAvatarId"
        fileName={fileName}
        name="specialist-avatar"
        ref={fileInputRef}
        classes="form__input form__input_pos_first"
        onChange={handleChange}
      />
      <Input
        id="editSpecNameId"
        name="specName"
        placeholder="Имя"
        value={values.specName}
        classes="form__input"
        onChange={handleChange}
        maxLength={60}
      />
      <Input
        id="editSpecAboutId"
        name="about"
        placeholder="Описание"
        value={values.about}
        classes="form__input"
        onChange={handleChange}
        maxLength={60}
      />
      <Button type="submit" classes="form__submit-button" disabled={!isValid}>
        Отправить
      </Button>
      {isLoading && <Preloader />}
    </Form>
  );
}

EditSpecForm.propTypes = {
  spec: specsPropTypes.isRequired,
};
