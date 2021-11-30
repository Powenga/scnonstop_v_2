import React, {
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import Form from './Form';
import Input from './Input';
import api from '../../utils/main-api';
import styles from './AddNewsForm.module.css';
import Button from '../Button/Button';
import Preloader from '../Preloader/Preloader';
import modalContext from '../../context/modal-context';
import SectionTitle from '../SectionTitle/SectionTitle';
import FileInput from './FileInput';

let formData = new FormData();

export default function AddSpecialistForm() {
  const [, setModalState] = useContext(modalContext);
  const [values, setValues] = useState({
    name: '',
    age: '',
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
        formData = new FormData();
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
        title="Добавление мастера"
        subtitle="Введите данные для добавления мастера"
      />
      <FileInput
        id="specsAvatarId"
        fileName={fileName}
        name="specialist-avatar"
        ref={fileInputRef}
        required
        classes={`${styles.input} ${styles.input_pos_first}`}
        onChange={handleChange}
      />
      <Input
        id="specNameId"
        name="name"
        placeholder="Имя"
        value={values.name}
        classes={styles.input}
        onChange={handleChange}
        maxLength={60}
      />
      <Input
        id="specsAgeId"
        type="number"
        name="age"
        placeholder="Возраст мастера"
        value={values.age}
        classes={styles.input}
        onChange={handleChange}
        max={100}
      />
      <Input
        id="specAboutId"
        name="about"
        placeholder="Описание"
        value={values.about}
        classes={styles.input}
        onChange={handleChange}
        maxLength={60}
      />
      <Button
        type="submit"
        classes={styles.submitButton}
        disabled={!isValid}
      >
        Отправить
      </Button>
      {isLoading && <Preloader />}
    </Form>
  );
}