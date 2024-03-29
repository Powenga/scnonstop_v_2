import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import SectionTitleWithButton from '../SectionTitleWithButton/SectionTitleWithButton';
import CardWithOptions from '../CardWIthOptions/CardWIthOptions';
import NewsCard from '../NewsCard/NewsCard';
import mainApi from '../../utils/main-api';
import { newsRenderPrefs, MODAL_TYPES_ADD_NEWS } from '../../utils/constants';
import './News.css';

export default function News({
  classes,
  handleClickNews,
  handleDeleteNewsClick,
  handleEditNewsClick,
}) {
  const [newsList, setNewsList] = useState([]);
  const [renderedNewsList, setRenderedNewsList] = useState([]);
  const [numberOfRenderedNews, setNumberOfRenderedNews] = useState(0);
  const [newsGrid, setNewsGrid] = useState({
    rows: 0,
    newsPerRows: 0,
  });
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  function updateViewportWidth() {
    setTimeout(() => {
      setViewportWidth(window.innerWidth);
    }, 1000);
  }

  function handleMoreClick() {
    if (numberOfRenderedNews < newsList.length) {
      setNewsGrid((state) => ({
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
    let newsPerRows = 0;
    if (viewportWidth <= newsRenderPrefs.tabletPortrait.resolution) {
      newsPerRows = newsRenderPrefs.tabletPortrait.numberPerRow;
      rows = getNumberOfRows(
        numberOfRenderedNews,
        newsPerRows,
        newsRenderPrefs.tabletPortrait.rows,
      );
    }
    if (viewportWidth <= newsRenderPrefs.mobile.resolution) {
      newsPerRows = newsRenderPrefs.mobile.numberPerRow;
      rows = getNumberOfRows(
        numberOfRenderedNews,
        newsPerRows,
        newsRenderPrefs.mobile.rows,
      );
    }
    if (viewportWidth > newsRenderPrefs.tabletPortrait.resolution) {
      newsPerRows = newsRenderPrefs.desktop.numberPerRow;
      rows = getNumberOfRows(
        numberOfRenderedNews,
        newsPerRows,
        newsRenderPrefs.desktop.rows,
      );
    }
    setNewsGrid({ rows, newsPerRows });
  }, [viewportWidth]);

  useEffect(() => {
    const list = newsList.slice(0, newsGrid.rows * newsGrid.newsPerRows);
    setRenderedNewsList(list);
    setNumberOfRenderedNews(list.length);
  }, [newsList, newsGrid]);

  useEffect(() => {
    mainApi
      .getNews()
      .then((data) => {
        const formattedNews = data.map((news) => {
          const d = new Date(news.date);
          const day = d.getDate();
          const month = d.getMonth() + 1;
          return {
            ...news,
            date: d,
            formattedDate: `${day < 9 ? '0' : ''}${day}.${
              month < 9 ? '0' : ''
            }${month}.${d.getFullYear()}`,
            content: `${news.content.substr(0, 150).trim()}...`,
            fullContent: news.content,
          };
        });
        setNewsList(
          formattedNews.sort((a, b) => new Date(b.date) - new Date(a.date)),
        );
      })
      .catch(() => {
        setNewsList([]);
      });
  }, []);

  return (
    <div className={`news ${classes && classes}`}>
      <SectionTitleWithButton
        title="Новости"
        subtitle="Только актуальная и полезная информация"
        modalType={MODAL_TYPES_ADD_NEWS}
      />
      <ul className="news__container">
        {renderedNewsList.map((card) => (
          <li className="news__item" key={card.id}>
            <CardWithOptions
              Component={NewsCard}
              handleClick={handleClickNews}
              handleDeleteClick={handleDeleteNewsClick}
              handleEditClick={handleEditNewsClick}
              card={card}
            />
          </li>
        ))}
      </ul>
      {numberOfRenderedNews < newsList.length && (
        <Button
          classes="news__more"
          type="Button"
          onButtonClick={(evt) => handleMoreClick(evt)}
        >
          Еще
        </Button>
      )}
      {numberOfRenderedNews <= 0 && (
        <p className="news__empty-message">
          Новостей пока нет... Но скоро появятся :&#41;
        </p>
      )}
    </div>
  );
}

News.propTypes = {
  classes: PropTypes.string.isRequired,
  handleClickNews: PropTypes.func.isRequired,
  handleDeleteNewsClick: PropTypes.func.isRequired,
  handleEditNewsClick: PropTypes.func.isRequired,
};
