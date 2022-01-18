import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="main" style={{ backgroundColor: '#fff' }}>
      <section className="main__section">
        <div className="app__container" style={{ paddingTop: 20 }}>
          <p className="main-text main-text_large main-text_centered">404</p>
          <p className="main-text main-text_paragraph main-text_centered">
            К сожалению, такой страницы не существует.
          </p>
          <p className="main-text main-text_paragraph main-text_centered">
            <NavLink to="/" className="main-text">
              На главную
            </NavLink>
          </p>
        </div>
      </section>
    </main>
  );
}
