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
import SectionTitle from '../SectionTitle/SectionTitle';
import FileInput from './FileInput';

const formData = new FormData();

export default function AddNewsForm() {
  const [, setModalState] = useContext(modalContext);
  const [values, setValues] = useState({
    title: '',
    date: '',
    content: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoadig, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  const handleChange = useCallback((event) => {
    if (formRef.current) {
      formRef.current.checkValidity();
      setIsValid(formRef.current.checkValidity());
    }
    const { target } = event;
    if (target.type === 'file') {
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
      ref={formRef}
      name="addNewsForm"
      classes={styles.form}
      onSubmit={handleSubmit}
      errorMessage={errorMessage}
    >
      <SectionTitle
        title="Добавление новости"
        subtitle="Введите данные для добавления новости"
      />
      <FileInput
        name="news-image"
        ref={fileInputRef}
        required
        classes={`${styles.input} ${styles.input_pos_first}`}
        onChange={handleChange}
      />
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
        id="titleNewsId"
        type="date"
        name="date"
        placeholder="Дата размещения"
        value={values.date}
        classes={styles.input}
        onChange={handleChange}
        maxLength={60}
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
      <Button
        type="submit"
        classes={styles.submitButton}
        disabled={!isValid}
      >
        Отправить
      </Button>
      {isLoadig && <Preloader />}
    </Form>
  );
}
