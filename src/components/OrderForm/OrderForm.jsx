import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  appliancesCards,
  MODAL_TYPES_OWN_PROBLEM,
  priceList,
} from '../../utils/constants';
import Button from '../Button/Button';
import Form from '../Form/Form';
import styles from './OrderForm.module.css';
import modalContext from '../../context/modal-context';
import { orderStatePropTypes } from '../../utils/prop-types';

export default function OrderForm({ classes, orderState, children }) {
  const [values, setValues] = orderState;
  const [, setModal] = useContext(modalContext);
  const [step, setStep] = useState(1);
  const [stepValidity, setStepValidity] = useState([]);
  const [problemList, setProblemList] = useState([]);
  const [fieldsetStyle, setFieldsetStyle] = useState('');
  const [stepIcontStyle, setStepIcontStyle] = useState('');

  const formRef = useRef(null);

  const handleOwnProblemClick = (event) => {
    event.preventDefault();
    setModal({
      isOpen: true,
      modalType: MODAL_TYPES_OWN_PROBLEM,
    });
  };

  const handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    setValues((state) => {
      if (name === 'appType') {
        return {
          ...state,
          [name]: value,
          problem: '',
          brand: '',
          ownProblem: '',
        };
      }
      return {
        ...state,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    setStepValidity([
      Boolean(values.appType),
      Boolean(values.problem && values.problem !== 'Другая проблема'),
      Boolean(values.brand),
    ]);
  }, [values, step]);

  useEffect(() => {
    if (values.appType) {
      setProblemList(
        () => priceList.find((item) => item.id === values.appType).content,
      );
    }
  }, [values.appType]);

  useEffect(() => {
    setFieldsetStyle(`fieldset_step_${step}`);
    setStepIcontStyle(`stages-wrap_step_${step}`);
  }, [step]);

  const handleNextStep = (event) => {
    event.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = (event) => {
    event.preventDefault();
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const onSubmit = () => {};
  return (
    <div className={`order-form ${classes}`}>
      <div className={styles.wrap}>
        {children}
        <Form
          name="order-form"
          classes={styles.form}
          onSubmit={onSubmit}
          ref={formRef}
        >
          <p className={styles.info}>
            Для многих фотография – способ самовыражения и общения, возможность
            высказаться и заявить о себе. Длиннофокусные объективы выполняют
            съемку с более узким углом обзора, чем угол зрения человеческого
            глаза.
          </p>
          <div className={styles['fieldset-wrap']}>
            <fieldset className={`${styles.fieldset} ${styles[fieldsetStyle]}`}>
              <legend className={styles.legend}>Выберите тип техники:</legend>
              <div className={styles['fieldset-content']}>
                <div className={styles['appliances-wrap']}>
                  {appliancesCards.map((elem) => (
                    <label
                      key={elem.id}
                      htmlFor={`app-type_${elem.id}`}
                      className={styles.label}
                    >
                      <input
                        id={`app-type_${elem.id}`}
                        name="appType"
                        type="radio"
                        value={elem.value}
                        checked={elem.value === values.appType}
                        className={styles.input}
                        onChange={handleChange}
                        required
                      />
                      <img
                        src={elem.formSrc}
                        alt={elem.title}
                        className={styles['input-image']}
                      />
                      <p className={styles['input-title']}>{elem.title}</p>
                    </label>
                  ))}
                </div>
              </div>
            </fieldset>
            <fieldset className={`${styles.fieldset} ${styles[fieldsetStyle]}`}>
              <legend className={styles.legend}>Выберите неисправность:</legend>
              <div className={styles['fieldset-content']}>
                <ul className="problem">
                  {problemList.map((item) => (
                    <li key={item.id} className="problem__item">
                      <label
                        htmlFor={`problem_${item.id}`}
                        className={`${styles.label} problem__text`}
                      >
                        <input
                          id={`problem_${item.id}`}
                          type="radio"
                          name="problem"
                          value={item.problem}
                          onChange={handleChange}
                          checked={item.problem === values.problem}
                          className={styles.input}
                        />
                        <span className={styles.problem}>{item.problem}</span>
                      </label>
                    </li>
                  ))}
                  <li className="problem__item">
                    <label
                      title={values.ownProblem}
                      htmlFor="problem_more"
                      className={`${styles.label} problem__text`}
                    >
                      <input
                        id="problem_more"
                        type="radio"
                        name="problem"
                        value={values.ownProblem}
                        onChange={handleChange}
                        checked={
                          values.ownProblem
                          && values.problem === values.ownProblem
                        }
                        className={styles.input}
                        onClick={handleOwnProblemClick}
                      />
                      <span className={styles.problem}>
                        {values.ownProblem
                          ? `${values.ownProblem.slice(0, 50).trim()}...`
                          : 'Другая проблема'}
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </fieldset>
            <fieldset className={`${styles.fieldset} ${styles[fieldsetStyle]}`}>
              <legend className={styles.legend}>Выберите тип техники:</legend>
              <div className={styles['fieldset-content']}>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
              </div>
            </fieldset>
          </div>

          <div className={styles['menu-wrap']}>
            <div className={styles['button-wrap']}>
              {step > 1 && (
                <Button
                  type="button"
                  classes={styles.button}
                  onButtonClick={handlePrevStep}
                >
                  Назад
                </Button>
              )}
            </div>
            <div className={styles.stages}>
              <div
                className={`${styles['stages-wrap']} ${styles[stepIcontStyle]}`}
              >
                <div className={styles.stage} />
                <div className={styles.stage} />
                <div className={styles.stage} />
                <div className={styles.stage} />
              </div>
            </div>
            <div
              className={`${styles['button-wrap']} ${styles.wrap_pos_right}`}
            >
              <Button
                type="button"
                classes={styles.button}
                onButtonClick={handleNextStep}
                disabled={!stepValidity[step - 1]}
              >
                ДАЛЕЕ
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

OrderForm.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.element.isRequired,
  orderState: orderStatePropTypes.isRequired,
};

OrderForm.defaultProps = {
  classes: '',
};
