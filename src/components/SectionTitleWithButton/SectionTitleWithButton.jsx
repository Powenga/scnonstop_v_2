import React, { useContext } from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle/SectionTitle';
import UserContext from '../../context/user-context';
import ModalContext from '../../context/modal-context';
import './SectionTitleWithButton.css';

export default function SectionTitleWithButton({
  title,
  subtitle,
  modalType,
  theme,
}) {
  const [shouldShowButton, setShouldShowButton] = useState(false);
  const { user } = useContext(UserContext);
  const [, setModal] = useContext(ModalContext);

  const handleClick = (event) => {
    event.preventDefault();
    setModal({
      isOpen: true,
      modalType,
    });
  };

  useEffect(() => {
    setShouldShowButton(user.isAdmin);
  }, [user]);

  return (
    <div className="section-title-with-button">
      <SectionTitle title={title} subtitle={subtitle} theme={theme} />
      {shouldShowButton && (
        <button
          type="button"
          className="section-title-with-button__button"
          aria-label="Добавить"
          onClick={handleClick}
        />
      )}
    </div>
  );
}

SectionTitleWithButton.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  modalType: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

SectionTitleWithButton.defaultProps = {
  theme: '',
};
