import React from 'react'
import Link from 'next/link'
import css from './_project.scss'

const Sidebar = () => (
    <div className='sidebar-wrapper'>
        <div className='sidebar-brand'>
            <Link href='/'>
                <a className='logo'>Project P</a>
            </Link>
        </div>
        <div className='select-location'>
            <p>Tjuna Toilet</p>
        </div>
    </div>
);

export default Sidebar
