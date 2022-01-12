import React from 'react';
import PropTypes from 'prop-types';
import { schemePropTypes } from '../../utils/prop-types';
import styles from './SchemeCard.module.css';

export default function SchemeCard({ classes, card }) {
  return (
    <div className={`${styles.card} ${classes || ''}`}>
      <div className={styles['text-wrap']}>
        <p className={styles.text}>{card.content}</p>
      </div>
      <picture className={styles.pic}>
        <source
          srcSet={`${card.src}, ${card.srcMobile} 2x`}
          media="(max-width: 550px)"
        />
        <img src={card.src} alt={card.alt} className={styles.img} />
      </picture>
      <div
        className={`${styles.arrow} ${styles[`arrow_stage_${card.stage}`]}`}
      />
    </div>
  );
}

SchemeCard.propTypes = {
  classes: PropTypes.string,
  card: schemePropTypes.isRequired,
};

SchemeCard.defaultProps = {
  classes: '',
};
