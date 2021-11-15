import React, { useContext, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import ModalContext from '../../context/modal-context';
import styles from './Modal.module.css';
import { ESC_KEY, MODAL_ROOT_SELECTOR } from '../../utils/constants';

const modalRoot = document.querySelector(MODAL_ROOT_SELECTOR);

export default function Modal({ children }) {
  const [, setModal] = useContext(ModalContext);
  const closeModal = useCallback(() => {
    setModal({
      isOpen: false,
      modalType: '',
    });
  }, []);

  useEffect(() => {
    function handleEscPress(event) {
      if (event.key === ESC_KEY) {
        closeModal();
      }
    }
    document.addEventListener('keydown', handleEscPress);
    return () => {
      document.removeEventListener('keydown', handleEscPress);
    };
  }, [closeModal]);

  return createPortal(
    <div className={styles.modal}>
      <ModalOverlay closeModal={closeModal} />
      <div className={styles.modalContainer}>
        <button
          type="button"
          aria-label="Закрыть"
          className={styles.closeButton}
          onClick={closeModal}
        />
        {children}
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  children: PropTypes.element,
};
