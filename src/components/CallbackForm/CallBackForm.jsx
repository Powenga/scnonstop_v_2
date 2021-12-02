import React, {
  useState,
  useCallback,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Form from '../Form/Form';
import Input from '../Form/Input';
import Preloader from '../Preloader/Preloader';
import mainApi from '../../utils/main-api';
import styles from './CallbackForm.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import InputWithMask from '../Form/InputWithMask';

export default function CallBackForm({ classes, children }) {
  const [values, setValues] = useState({
    userName: '',
    userPhone: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    mainApi
      .sendCallbackQuery(values)
      .then(() => {
        setErrorMessage('');
        setIsLoading(false);
        setIsSuccess(true);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsLoading(false);
        setIsSuccess(false);
      });
  };

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

  return (
    <div className={`${styles['callback-form']} ${classes || ''}`}>
      <div className={styles['callback-form__wrap']}>
        {children}
        <Form
          ref={formRef}
          name="callback-form"
          classes={styles['callback-form__form']}
          onSubmit={onSubmit}
          errorMessage={errorMessage}
        >
          <p className={styles['callback-form__info']}>
            Для многих фотография – способ самовыражения и общения, возможность
            высказаться и заявить о себе. Длиннофокусные объективы выполняют
            съемку с более узким углом обзора, чем угол зрения человеческого
            глаза.
          </p>
          <Input
            id="callbackUserName"
            name="userName"
            placeholder="Ваше имя"
            value={values.userName}
            classes={styles['callback-form__label']}
            onChange={handleChange}
            minLength={2}
            maxLength={25}
            required
          />
          <InputWithMask
            id="callbackUserPhone"
            name="userPhone"
            placeholder="Телефон для связи"
            value={values.userPhone}
            classes={styles['callback-form__label']}
            onChange={handleChange}
            minLength={1}
            maxLength={25}
            required
            mask="_"
            format="+7 (###) ###-##-##"
            allowEmptyFormatting
            regexp={/\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/}
          />
          <div>
            <label
              htmlFor="policy"
              className={`${styles['callback-form__label']} ${styles['callback-form__label_type_policy']}`}
            >
              <input
                id="policy"
                name="policy"
                type="checkbox"
                value={values.policy}
                className={styles['callback-form__checkbox']}
                onChange={handleChange}
                required
              />
              <span className={styles['callback-form__checkbox-pseudo']} />
              <span className={styles['callback-form__policy-info']}>
                Я согласен с
                {' '}
                <Button
                  classes={`button_type_text ${styles['callback-form__policy']}`}
                >
                  Политикой конфиденциальности
                </Button>
                {' '}
                и
                {' '}
                <Button
                  classes={`button_type_text ${styles['callback-form__policy']}`}
                >
                  Правилами пользования сайтом
                </Button>
              </span>
            </label>
          </div>
          <Button
            type="submit"
            classes={styles['callback-form__button']}
            disabled={!isValid}
          >
            ЗАКАЗАТЬ ЗВОНОК
          </Button>
        </Form>
        {isSuccess && (
        <div className="message">
          <div className="message__container">
            <SectionTitle title="Cообщение отправлено!" classes="message__title" />
            <p className="main-text message__text">Спасибо за обращение.</p>
            <p className="main-text message__text">
              Мы свяжемся с Вами в ближайшее время.
            </p>
          </div>
        </div>
        )}
        {isLoading && <Preloader />}
      </div>
    </div>
  );
}

CallBackForm.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.element.isRequired,
};

CallBackForm.defaultProps = {
  classes: '',
};
