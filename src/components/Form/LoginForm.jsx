import React, {
  useCallback,
  useRef,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import Form from './Form';
import Input from './Input';
import Button from '../Button/Button';
import Preloader from '../Preloader/Preloader';
import SectionTitle from '../SectionTitle/SectionTitle';
import auth from '../../utils/auth';

export default function AddNewsForm() {
  const history = useHistory();
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
      .signIn(values)
      .then(() => {
        setIsLoading(false);
        history.replace('/');
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
    >
      <SectionTitle
        title="Вход"
      />
      <Input
        id="loginEmail"
        name="email"
        placeholder="E-mail"
        value={values.email}
        classes="form__input form__input_pos_first"
        onChange={handleChange}
        maxLength={60}
      />
      <Input
        id="loginPassword"
        type="password"
        name="password"
        placeholder="Пароль"
        value={values.password}
        classes="form__input"
        onChange={handleChange}
        maxLength={60}
        minLength={8}
      />
      <Button
        type="submit"
        classes="form__submit-button"
        disabled={!isValid}
      >
        Войти
      </Button>
      {isLoading && <Preloader />}
    </Form>
  );
}
