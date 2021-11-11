import './CallbackForm.css';
import { useState } from 'react';
import Button from '../Button/Button';
import Form from '../Form/Form';

export default function CallBackForm({ classes, children }) {
  const [values, setValues] = useState({});

  function onSubmit(event) {
    event.preventDefault();
    alert('Форма отправлена!');
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <div className={`callback-form ${classes || ''}`}>
      <div className="callback-form__wrap">
        {children}
        <Form
          name="callback-form"
          classes="callback-form__form"
          onSubmit={onSubmit}
        >
          <p className="callback-form__info">
            Для многих фотография – способ самовыражения и общения, возможность
            высказаться и заявить о себе. Длиннофокусные объективы выполняют
            съемку с более узким углом обзора, чем угол зрения человеческого
            глаза.
          </p>
          <label className="callback-form__label">
            <input
              name="userName"
              type="text"
              value={values.userName}
              className="callback-form__input"
              onChange={handleChange}
            />
            <span
              className={`callback-form__input-placeholder ${
                values.userName ? 'callback-form__input-placeholder_fill' : ''
              }`}
            >
              Ваше имя
            </span>
          </label>
          <label className="callback-form__label">
            <input
              name="userPhone"
              type="text"
              value={values.userPhone}
              className="callback-form__input"
              onChange={handleChange}
            />
            <span
              className={`callback-form__input-placeholder ${
                values.userPhone ? 'callback-form__input-placeholder_fill' : ''
              }`}
            >
              Телефон для связи
            </span>
          </label>
          <div className="callback-form__policy-wrap">
            <label className="callback-form__label callback-form__label_type_policy">
              <input
                name="policy"
                type="checkbox"
                value={values.policy}
                className="callback-form__checkbox"
              />
              <span className="callback-form__checkbox-pseudo" />
              <span className="callback-form__policy-info">
                Я согласен с
                {' '}
                <Button
                  classes="button_type_text callback-form__policy"
                  type="button"
                >
                  Политикой конфиденциальности
                </Button>
                {' '}
                и
                {' '}
                <Button
                  classes="button_type_text callback-form__policy"
                  type="button"
                >
                  Правилами пользования сайтом
                </Button>
              </span>
            </label>
          </div>
          <Button type="submit" classes="callback-form__button">
            ЗАКАЗАТЬ ЗВОНОК
          </Button>
        </Form>
      </div>
    </div>
  );
}
