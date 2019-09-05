import React from 'react';
import css from './sidebar.scss';

const Sidebar = () => (
  <aside className={css.sidebar}>
    <div className={css.sidebar__logo}>
      <button type="button">
        <span className={css.sidebar__title}>Project P</span>
      </button>
    </div>
    <div className="select-location">
      <p>Tjuna Toilet</p>
    </div>
  </aside>
);

export default Sidebar;
