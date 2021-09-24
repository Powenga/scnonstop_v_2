import { appliancesCards } from '../../utils/constants';
import Button from '../Button/Button';
import Form from '../Form/Form';
import './OrderForm.css';

export default function OrderForm({ classes, children }) {
  function onSubmit() {
    alert('Форма отправлена!');
  }

  return (
    <div className={`order-form ${classes}`}>
      <div className="order-form__wrap">
        {children}
        <Form name="order-form" classes="order-form__form" onSubmit={onSubmit}>
          <p className="order-form__info">
            Для многих фотография – способ самовыражения и общения, возможность
            высказаться и заявить о себе. Длиннофокусные объективы выполняют
            съемку с более узким углом обзора, чем угол зрения человеческого
            глаза.
          </p>
          <fieldset className="order-form__fieldset">
            <legend className="order-form__legend">Выберите тип техники:</legend>
            <div className="order-form__appliances-wrap">
              {appliancesCards.map((elem) => (
                <label className="order-form__label">
                  <input
                    name="app-type"
                    type="radio"
                    value={elem.value}
                    className="order-form__input"
                  />
                  <img
                    src={elem.formSrc}
                    alt={elem.title}
                    className="order-form__input-image"
                  />
                  <p className="order-form__input-title">{elem.title}</p>
                </label>
              ))}
            </div>
          </fieldset>
          <div className="order-form__menu-wrap">
            <div className="order-form__button-wrap"></div>
            <div className="order-form__stages">
              <div className="order-form__stages-wrap">
                <div className="order-form__stage"></div>
                <div className="order-form__stage"></div>
                <div className="order-form__stage"></div>
                <div className="order-form__stage"></div>
              </div>
            </div>
            <div className="order-form__button-wrap order-form__wrap_pos_right">
              <Button type="button" classes="order-form__button">
                ДАЛЕЕ
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
