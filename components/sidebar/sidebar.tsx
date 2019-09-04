import React from 'react'
import Link from 'next/link'
import css from './sidebar.scss'

const Sidebar = () => (
    <aside className={css.sidebar}>
        <div className={css.sidebar__logo}>
            <Link href='/'>
                <a className={css.sidebar__title}>Project P</a>
            </Link>
        </div>
        <div className='select-location'>
            <p>Tjuna Toilet</p>
        </div>
    </aside>
);

export default Sidebar
