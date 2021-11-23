import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import Input from '../Form/Input';
import TextArea from '../Form/TextArea';
import api from '../../utils/main-api';
import styles from './AddNewsModalContent.module.css';

const formData = new FormData();

export default function AddNewsModalContent() {
  const [values, setValues] = useState({
    title: '',
    date: '',
    content: '',
  });

  const fileInputRef = useRef(null);

  const handleChange = useCallback((event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    setValues((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  const handleSubmit = (event) => {
    formData.append('news-image', fileInputRef.current.files[0]);
    event.preventDefault();
    api.saveNews(values, formData);
  };

  return (
    <Form name="addNewsForm" classes={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Добавление новости</h2>
      <input type="file" name="news-image" ref={fileInputRef} className={styles.input} />
      <Input
        id="titleNewsId"
        name="title"
        placeholder="Название новости"
        value={values.title}
        classes={styles.input}
        onChange={handleChange}
        maxLength={60}
      />
      <Input
        id="dateNewsId"
        name="date"
        placeholder="Дата размещения"
        value={values.date}
        classes={styles.input}
        onChange={handleChange}
        maxLength={10}
      />
      <TextArea
        id="contentNewsId"
        name="content"
        value={values.content}
        rows={5}
        placeholder="Текст новости"
        classes={styles.input}
        onChange={handleChange}
        maxLength={750}
      />
      <button type="submit">Отправить</button>
    </Form>
  );
}
