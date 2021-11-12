import React, { useContext } from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle/SectionTitle';
import userContext from '../../context/user-context';
import './SectionTitleWithButton.css';

export default function SectionTitleWithButton({ title, subtitle }) {
  const [shouldShowButton, setShouldShowButton] = useState(false);
  const user = useContext(userContext);

  useEffect(() => {
    setShouldShowButton(user.isAdmin);
  }, [user]);

  return (
    <div className="section-title-with-button">
      <SectionTitle title={title} subtitle={subtitle} />
      {shouldShowButton && (
        <button
          type="button"
          className="section-title-with-button__button"
          aria-label="Добавить"
        />
      )}
    </div>
  );
}

SectionTitleWithButton.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
