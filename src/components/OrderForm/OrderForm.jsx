import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  appliancesCards,
  MODAL_TYPES_OWN_PROBLEM,
} from '../../utils/constants';
import { problems } from '../../utils/data';
import brands from '../../utils/data/brands';
import Button from '../Button/Button';
import Form from '../Form/Form';
import styles from './OrderForm.module.css';
import modalContext from '../../context/modal-context';
import { orderStatePropTypes } from '../../utils/prop-types';
import Fieldset from './Fieldset';
import FieldsetWithProblems from './FieldsetWithProblems';
import FieldsetWithBrands from './FieldsetWithBrands';

export default function OrderForm({ classes, orderState, children }) {
  const [values, setValues] = orderState;
  const [, setModal] = useContext(modalContext);
  const [step, setStep] = useState(1);
  const [stepValidity, setStepValidity] = useState([]);
  const [problemList, setProblemList] = useState([]);
  const [fieldsetStyle, setFieldsetStyle] = useState(
    styles.fieldset_slide_forward,
  );
  const [stepIcontStyle, setStepIcontStyle] = useState('');
  const [brandList, setBrandList] = useState([]);

  const formRef = useRef(null);

  const handleOwnProblemClick = (event) => {
    event.preventDefault();
    const { target } = event;
    setModal({
      isOpen: true,
      modalType: MODAL_TYPES_OWN_PROBLEM,
      focusTarget: target,
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

  const handleNextStep = (event) => {
    event.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    }
    setFieldsetStyle(styles.fieldset_slide_forward);
  };

  const handlePrevStep = (event) => {
    event.preventDefault();
    if (step > 1) {
      setStep(step - 1);
    }
    setFieldsetStyle(styles.fieldset_slide_backward);
  };

  const onSubmit = () => {};

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
        () => problems.find((item) => item.id === values.appType).problems,
      );
      const list = brands.filter((item) =>
        item.appType.includes(values.appType),
      );
      setBrandList([...list]);
    }
  }, [values.appType]);

  useEffect(() => {
    setStepIcontStyle(`stages-wrap_step_${step}`);
  }, [step]);

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
            {step === 1 && (
              <Fieldset
                title="Начните с выбора техники"
                classes={`${styles.fieldset} ${fieldsetStyle}`}
              >
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
              </Fieldset>
            )}
            {step === 2 && (
              <FieldsetWithProblems
                problemList={problemList}
                fieldsetStyle={fieldsetStyle}
                values={values}
                handleChange={handleChange}
                handleOwnProblemClick={handleOwnProblemClick}
              />
            )}
            {step === 3 && (
              <FieldsetWithBrands
                brandList={brandList}
                fieldsetStyle={fieldsetStyle}
                values={values}
                handleChange={handleChange}
              />
            )}
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
