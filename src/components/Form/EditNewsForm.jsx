import React, { useCallback, useContext, useRef, useState } from 'react';
import Form from './Form';
import Input from './Input';
import TextArea from './TextArea';
import api from '../../utils/main-api';
import Button from '../Button/Button';
import Preloader from '../Preloader/Preloader';
import modalContext from '../../context/modal-context';
import SectionTitle from '../SectionTitle/SectionTitle';
import FileInput from './FileInput';
import { newsPropTypes } from '../../utils/prop-types';

const formData = new FormData();

export default function EditNewsForm({ news }) {
  const { id, title, date, fullContent } = news;
  const [, setModalState] = useContext(modalContext);
  const [values, setValues] = useState({
    title,
    date: `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? '0' : ''}${
      date.getMonth() + 1
    }-${date.getDate() < 10 ? '0' : ''}${date.getDate()}`,
    content: fullContent,
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
      .editNews({ id, ...values }, formData, fileName)
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
      name="editNewsForm"
      onSubmit={handleSubmit}
      errorMessage={errorMessage}
    >
      <SectionTitle
        title="Редактирование новости"
        subtitle="Введите данные для редактирования новости"
      />
      <FileInput
        id="editFileNewsId"
        fileName={fileName}
        name="news-image"
        ref={fileInputRef}
        classes="form__input form__input_pos_first"
        onChange={handleChange}
      />
      <Input
        id="editTitleNewsId"
        name="title"
        placeholder="Название новости"
        value={values.title}
        classes="form__input"
        onChange={handleChange}
        maxLength={60}
      />
      <Input
        id="editDateNewsId"
        type="date"
        name="date"
        placeholder="Дата размещения"
        value={values.date}
        classes="form__input"
        onChange={handleChange}
        maxLength={60}
      />
      <TextArea
        id="editContentNewsId"
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
      {isLoading && <Preloader />}
    </Form>
  );
}

EditNewsForm.propTypes = {
  news: newsPropTypes.isRequired,
};
