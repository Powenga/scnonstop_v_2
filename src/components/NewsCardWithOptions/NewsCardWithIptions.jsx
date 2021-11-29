import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import NewsCard from '../NewsCard/NewsCard';
import UserContext from '../../context/user-context';
import NewsHandlerContext from '../../context/news-handlers-context';
import { newsPropTypes } from '../../utils/prop-types';
import styles from './NewsCardWithOption.module.css';

export default function NewsCardWithOption({ ...props }) {
  const {
    card,
  } = props;
  const [shouldShowButton, setShouldShowButton] = useState(false);
  const user = useContext(UserContext);
  const {
    onClick,
    handleDeleteNewsClick,
    handleEditNewsClick,
  } = useContext(NewsHandlerContext);

  function handleDelete() {
    handleDeleteNewsClick(card.id);
  }

  function handleEdit() {
    handleEditNewsClick(card);
  }

  useEffect(() => {
    setShouldShowButton(user.isAdmin);
  }, [user]);

  return (
    <div className={styles.container}>
      <NewsCard card={card} onClick={onClick} />

      {shouldShowButton && (
        <>
          <button
            type="button"
            className={`${styles.button} ${styles.delete_button}`}
            aria-label="Удалить"
            onClick={handleDelete}
          />
          <button
            type="button"
            className={`${styles.button} ${styles.edit_button}`}
            aria-label="Редактировать"
            onClick={handleEdit}
          />
        </>
      )}
    </div>
  );
}

NewsCardWithOption.propTypes = {
  card: newsPropTypes,
  onClick: PropTypes.func.isRequired,
  handleDeleteNewsClick: PropTypes.func.isRequired,
  handleEditNewsClick: PropTypes.func.isRequired,
};

NewsCardWithOption.defaultProps = {
  card: {},
};
