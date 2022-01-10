import React, { useCallback, useRef, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Form from './Form';
import Input from './Input';
import Button from '../Button/Button';
import SectionTitle from '../SectionTitle/SectionTitle';
import auth from '../../utils/auth';
import UserContext from '../../context/user-context';

export default function UpdatePasswordForm() {
  const { setUser } = useContext(UserContext);
  const history = useHistory();
  const [values, setValues] = useState({
    newPassword: '',
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
      .updatePassword(values)
      .then(() => {
        setUser({
          email: '',
          id: '',
          isAdmin: false,
          isLoaded: true,
        });
        setIsLoading(false);
        history.replace('/login');
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
      <SectionTitle title="Обновить пароль" />
      <Input
        id="updatePasswordOld"
        type="password"
        name="password"
        placeholder="Старый пароль"
        value={values.password}
        classes="form__input form__input_pos_first"
        onChange={handleChange}
        maxLength={60}
        minLength={8}
      />
      <Input
        id="updatePasswordNew"
        type="password"
        name="newPassword"
        placeholder="Новый пароль"
        value={values.newPassword}
        classes="form__input"
        onChange={handleChange}
        maxLength={60}
        minLength={8}
      />
      <Button type="submit" classes="form__submit-button" disabled={!isValid}>
        Обновить
      </Button>
    </Form>
  );
}
