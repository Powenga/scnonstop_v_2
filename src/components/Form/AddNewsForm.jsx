import React, {
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import Form from './Form';
import Input from './Input';
import TextArea from './TextArea';
import api from '../../utils/main-api';
import styles from './AddNewsForm.module.css';
import Button from '../Button/Button';
import Preloader from '../Preloader/Preloader';
import modalContext from '../../context/modal-context';

const formData = new FormData();

export default function AddNewsForm() {
  const [, setModalState] = useContext(modalContext);
  const [values, setValues] = useState({
    title: '',
    date: '',
    content: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoadig, setIsLoading] = useState(false);
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
    setIsLoading(true);
    formData.append('news-image', fileInputRef.current.files[0]);
    event.preventDefault();
    api.saveNews(values, formData)
      .then(() => {
        setModalState({
          isOpen: false,
          modalType: null,
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Form
      name="addNewsForm"
      classes={styles.form}
      onSubmit={handleSubmit}
      errorMessage={errorMessage}
    >
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
      <Button type="submit" classes={styles.submitButton}>Отправить</Button>
      {isLoadig && <Preloader />}
    </Form>
  );
}
