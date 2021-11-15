import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import Input from '../Form/Input';
import styles from './AddNewsModalContent.module.css';
import TextArea from '../Form/TextArea';

export default function AddNewsModalContent() {
  const [values, setValues] = useState({
    title: '',
    date: '',
    content: '',
  });

  const handleChange = useCallback((event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    setValues((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  return (
    <Form name="addNewsForm" classes={styles.form}>
      <h2 className={styles.title}>Добавление новости</h2>
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
    </Form>
  );
}
