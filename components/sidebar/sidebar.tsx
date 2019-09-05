import React from 'react';
import css from './sidebar.scss';

const Sidebar = () => (
  <aside className={css.sidebar}>
    <div className={css.sidebar__logo}>
      <h1 className={css.sidebar__title}>Project P</h1>
    </div>
    <div className={css.sidebar__select_location}>
      <p>Tjuna Toilet</p>
    </div>
  </aside>
);

export default Sidebar;
