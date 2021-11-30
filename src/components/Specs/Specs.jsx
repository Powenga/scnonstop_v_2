import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import SectionTitleWithButton from '../SectionTitleWithButton/SectionTitleWithButton';
import CardContainer from '../CardContainer/CardContainer';
import SpecCard from '../SpecCard/SpecCard';
import { MODAL_TYPES_ADD_SPECS, specsRenderPrefs, specs } from '../../utils/constants';
import api from '../../utils/main-api';
import './Specs.css';

export default function Specs({ classes }) {
  const [specsList, setSpecsList] = useState([]);
  const [renderedSpecsList, setRenderedSpecsList] = useState([]);
  const [numberOfRenderedSpecs, setNumberOfRenderedSpecs] = useState(0);
  const [specsGrid, setSpecsGrid] = useState({
    rows: 0,
    specsPerRows: 0,
  });
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  function updateViewportWidth() {
    setTimeout(() => {
      setViewportWidth(window.innerWidth);
    }, 1000);
  }

  function handleMoreClick() {
    if (numberOfRenderedSpecs < specsList.length) {
      setSpecsGrid((state) => ({
        ...state,
        rows: state.rows + 1,
      }));
    }
  }

  useEffect(() => {
    window.addEventListener('resize', updateViewportWidth);
    return () => {
      window.removeEventListener('resize', updateViewportWidth);
    };
  }, []);

  useEffect(() => {
    function getNumberOfRows(number, cardPerRow, initRows) {
      let rows = Math.ceil(number / cardPerRow);
      if (!rows) {
        rows = initRows;
      }
      return rows;
    }

    let rows = 0;
    let specsPerRows = 0;
    if (viewportWidth <= specsRenderPrefs.mobile.resolution) {
      specsPerRows = specsRenderPrefs.mobile.numberPerRow;
      rows = getNumberOfRows(
        specsRenderPrefs,
        specsPerRows,
        specsRenderPrefs.mobile.rows,
      );
    }
    if (viewportWidth > specsRenderPrefs.mobile.resolution) {
      specsPerRows = specsRenderPrefs.desktop.numberPerRow;
      rows = getNumberOfRows(
        specsRenderPrefs,
        specsPerRows,
        specsRenderPrefs.desktop.rows,
      );
    }
    setSpecsGrid({ rows, specsPerRows });
  }, [viewportWidth]);

  useEffect(() => {
    const list = specsList.slice(0, specsGrid.rows * specsGrid.specsPerRows);
    setRenderedSpecsList(list);
    setNumberOfRenderedSpecs(list.length);
    console.log({specsList, list, renderedSpecsList});
  }, [specsList, specsGrid]);

  useEffect(() => {
    api
      .getSpecs()
      .then((data) => {
        setSpecsList(data);
      })
      .catch(() => {
        setSpecsList([]);
      });
  }, []);

  return (
    <div className={`specs ${classes && classes}`}>
      <SectionTitleWithButton
        title="наши мастера"
        subtitle="Познакомтесь на нашими специалистами"
        modalType={MODAL_TYPES_ADD_SPECS}
        theme="dark"
      />
      <CardContainer
        classes="specs__container"
        Component={SpecCard}
        cards={renderedSpecsList}
        itemClasses="specs__item"
      />
      {numberOfRenderedSpecs < specsList.length && (
        <Button
          classes="specs__more-button button_style_dark"
          type="Button"
          onButtonClick={(evt) => handleMoreClick(evt)}
        >
          ПОКАЗАТЬ ЕЩЁ
        </Button>
      )}
      {numberOfRenderedSpecs <= 0 && (
        <p className="news__empty-message">
          Тут пока ничего нет... Но скоро появятся :&#41;
        </p>
      )}
    </div>
  );
}

Specs.propTypes = {
  classes: PropTypes.string.isRequired,
};