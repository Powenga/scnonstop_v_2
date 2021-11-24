import React from 'react';
import { createPortal } from 'react-dom';
import { MODAL_ROOT_SELECTOR } from '../../utils/constants';
import styles from './Preloader.module.css';

const modalRoot = document.querySelector(MODAL_ROOT_SELECTOR);

export default function Preloader() {
  return createPortal(
    <div className={styles.preloader}>
      <div className={styles.spinner} />
    </div>,
    modalRoot,
  );
}
