import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CardContainer from '../CardContainer/CardContainer';
import NewsCard from '../NewsCard/NewsCard';
import Button from '../Button/Button';
import mainApi from '../../utils/main-api';
import { newsRenderPrefs } from '../../utils/constants';
import './News.css';
import SectionTitle from '../SectionTitle/SectionTitle';

function News({ classes, onCardClick, children }) {
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
          return {
            ...news,
            date: `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`,
            content: `${news.content.substr(0, 150)}...`,
            fullContent: news.content,
          };
        });
        setNewsList(
          formattedNews.sort((a, b) => new Date(a.date) - new Date(b.date)),
        );
      })
      .catch(() => {
        setNewsList([]);
      });
  }, []);

  return (
    <div className={`news ${classes && classes}`}>
      <SectionTitle
        title="Новости и акции"
        subtitle="Узнайте о наших специальных предложениях"
      />
      {children}
      <CardContainer
        classes="news__container"
        Component={NewsCard}
        cards={renderedNewsList}
        onCardClick={onCardClick}
        itemClasses="news__item"
      />
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
        <p className="new__empty-message">
          Новостей пока нет... Но скоро появятся :&#41;
        </p>
      )}
    </div>
  );
}

export default News;

News.propTypes = {
  classes: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
