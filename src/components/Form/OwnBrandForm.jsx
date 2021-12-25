import React, {
  useCallback,
  useContext,
  useRef,
  useState,
  useEffect,
} from 'react';
import Form from './Form';
import TextArea from './TextArea';
import Button from '../Button/Button';
import modalContext from '../../context/modal-context';
import SectionTitle from '../SectionTitle/SectionTitle';
import { orderStatePropTypes } from '../../utils/prop-types';

export default function OwnBrandForm({ orderState }) {
  const [orderValues, setOrderValues] = orderState;
  const [, setModalState] = useContext(modalContext);
  const [values, setValues] = useState({
    ownBrand: orderValues.ownBrand,
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
    setOrderValues((state) => ({
      ...state,
      brand: values.ownBrand,
      ownBrand: values.ownBrand,
    }));
    setModalState({
      isOpen: false,
      modalType: '',
    });
  };

  return (
    <Form ref={formRef} name="addNewsForm" onSubmit={handleSubmit}>
      <SectionTitle
        title="Другая марка"
        subtitle="Как называется ваша техника?"
      />
      <TextArea
        id="ownBrandId"
        name="ownBrand"
        value={values.ownBrand}
        rows={4}
        placeholder="Введите марку техники"
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

OwnBrandForm.propTypes = {
  orderState: orderStatePropTypes.isRequired,
};
