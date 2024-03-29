import React, {
  useCallback,
  useContext,
  useRef,
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import TextArea from './TextArea';
import Button from '../Button/Button';
import modalContext from '../../context/modal-context';
import SectionTitle from '../SectionTitle/SectionTitle';
import { orderPropTypes } from '../../utils/prop-types';

export default function OwnProblemForm({ order, setOrder }) {
  const [, setModalState] = useContext(modalContext);
  const [values, setValues] = useState({
    ownProblem: order.ownProblem,
  });
  const [isValid, setIsValid] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.checkValidity();
      setIsValid(formRef.current.checkValidity());
    }
  }, []);

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
    event.preventDefault();
    setOrder((state) => ({
      ...state,
      problem: values.ownProblem,
      ownProblem: values.ownProblem,
    }));
    setModalState({
      isOpen: false,
      modalType: '',
    });
  };

  return (
    <Form ref={formRef} name="addNewsForm" onSubmit={handleSubmit}>
      <SectionTitle title="Другая проблема" subtitle="Опишите что сломалось" />
      <TextArea
        id="ownProblemId"
        name="ownProblem"
        value={values.ownProblem}
        rows={4}
        placeholder="Описание неполадки"
        classes="form__input_pos_first form__input"
        onChange={handleChange}
        maxLength={750}
      />
      <Button type="submit" classes="form__submit-button" disabled={!isValid}>
        сохранить
      </Button>
    </Form>
  );
}

OwnProblemForm.propTypes = {
  order: orderPropTypes.isRequired,
  setOrder: PropTypes.func.isRequired,
};
