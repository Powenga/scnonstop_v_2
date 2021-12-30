import React, { useCallback, useContext, useRef, useState } from 'react';
import Form from './Form';
import Input from './Input';
import api from '../../utils/main-api';
import Button from '../Button/Button';
import Preloader from '../Preloader/Preloader';
import modalContext from '../../context/modal-context';
import SectionTitle from '../SectionTitle/SectionTitle';
import FileInput from './FileInput';

export default function AddSpecialistForm() {
  const formData = new FormData();
  const [, setModalState] = useContext(modalContext);
  const [values, setValues] = useState({
    name: '',
    about: '',
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
      .saveSpecs(values, formData)
      .then(() => {
        setIsLoading(false);
        setModalState({
          isOpen: false,
          modalType: null,
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsLoading(false);
      });
  };

  return (
    <Form
      ref={formRef}
      name="addSpecForm"
      onSubmit={handleSubmit}
      errorMessage={errorMessage}
    >
      <SectionTitle
        title="Добавление мастера"
        subtitle="Введите данные для добавления мастера"
      />
      <FileInput
        id="specsAvatarId"
        fileName={fileName}
        name="specialist-avatar"
        ref={fileInputRef}
        required
        classes="form__input form__input_pos_first"
        onChange={handleChange}
      />
      <Input
        id="specNameId"
        name="name"
        placeholder="Имя"
        value={values.name}
        classes="form__input"
        onChange={handleChange}
        maxLength={60}
      />
      <Input
        id="specAboutId"
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
