import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../../context/user-context';
import { newsPropTypes } from '../../utils/prop-types';
import styles from './CardWithOptions.module.css';

export default function CardWithOptions({
  Component,
  card,
  handleClick,
  handleDeleteClick,
  handleEditClick,
}) {
  const [shouldShowButton, setShouldShowButton] = useState(false);
  const user = useContext(UserContext);

  function handleDelete() {
    handleDeleteClick(card);
  }

  function handleEdit() {
    handleEditClick(card);
  }

  useEffect(() => {
    setShouldShowButton(user.isAdmin);
  }, [user]);

  return (
    <div className={styles.container}>
      <Component card={card} onClick={handleClick} />

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

CardWithOptions.propTypes = {
  Component: PropTypes.element.isRequired,
  card: newsPropTypes,
  handleClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired,
};

CardWithOptions.defaultProps = {
  card: {},
};
