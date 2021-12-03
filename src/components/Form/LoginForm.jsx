import React, {
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import { Redirect } from 'react-router-dom';
import Form from './Form';
import Input from './Input';
import Button from '../Button/Button';
import Preloader from '../Preloader/Preloader';
import SectionTitle from '../SectionTitle/SectionTitle';
import UserContext from '../../context/user-context';
import auth from '../../utils/auth';
const styles = {};

export default function AddNewsForm() {
  const user = useContext(UserContext);
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const handleChange = useCallback((event) => {
    if (formRef.current) {
      formRef.current.checkValidity();
      setIsValid(formRef.current.checkValidity());
    }
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
    event.preventDefault();
    auth
      .saveNews(values)
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsLoading(false);
      });
  };

  if (user.id) {
    // return <Redirect to="/" />;
  }

  return (
    <Form
      ref={formRef}
      name="addNewsForm"
      classes={styles.form}
      onSubmit={handleSubmit}
      errorMessage={errorMessage}
    >
      <SectionTitle
        title="Вход"
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
        id="dateNewsId"
        type="date"
        name="date"
        placeholder="Дата размещения"
        value={values.date}
        classes={styles.input}
        onChange={handleChange}
        maxLength={60}
      />
      <Button
        type="submit"
        classes={styles.submitButton}
        disabled={!isValid}
      >
        Войти
      </Button>
      {isLoading && <Preloader />}
    </Form>
  );
}
