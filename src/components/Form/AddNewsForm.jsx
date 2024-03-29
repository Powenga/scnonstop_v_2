import React, { useCallback, useContext, useRef, useState } from 'react';
import Form from './Form';
import Input from './Input';
import TextArea from './TextArea';
import api from '../../utils/main-api';
import Button from '../Button/Button';
import modalContext from '../../context/modal-context';
import SectionTitle from '../SectionTitle/SectionTitle';
import FileInput from './FileInput';

export default function AddNewsForm() {
  const formData = new FormData();
  const [, setModalState] = useContext(modalContext);
  const [values, setValues] = useState({
    title: '',
    date: '',
    content: '',
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
    formData.append('news-image', fileInputRef.current.files[0]);
    event.preventDefault();
    api
      .saveNews(values, formData)
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
      name="addNewsForm"
      onSubmit={handleSubmit}
      errorMessage={errorMessage}
      isLoading={isLoading}
    >
      <SectionTitle
        title="Добавление новости"
        subtitle="Введите данные для добавления новости"
      />
      <FileInput
        id="fileNewsId"
        fileName={fileName}
        name="news-image"
        ref={fileInputRef}
        required
        classes="form__input form__input_pos_first"
        onChange={handleChange}
      />
      <Input
        id="titleNewsId"
        name="title"
        placeholder="Название новости"
        value={values.title}
        classes="form__input"
        onChange={handleChange}
        maxLength={60}
      />
      <Input
        id="dateNewsId"
        type="date"
        name="date"
        placeholder="Дата размещения"
        value={values.date}
        classes="form__input"
        onChange={handleChange}
        maxLength={60}
      />
      <TextArea
        id="contentNewsId"
        name="content"
        value={values.content}
        rows={4}
        placeholder="Текст новости"
        classes="form__input"
        onChange={handleChange}
        maxLength={750}
      />
      <Button type="submit" classes="form__submit-button" disabled={!isValid}>
        Отправить
      </Button>
    </Form>
  );
}
