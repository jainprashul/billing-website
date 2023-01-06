import React from 'react'
import { APP_TRY } from '../App'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <nav className='nav' style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
    }}>
        <div className="logo-wrapper">
            <img src={'./assets/logo2x.png'} alt="logo" />
            <h3 className='logo'><span>B</span>illin' Inc</h3>
        </div>
        <ul className='nav-items'>
            <li><a href='#'>Home</a></li>
            <li><a href='#features'>Features</a></li>
            <li><a href='#why'>Why</a></li>
            <li><a href='#about'>About</a></li>
            <li><a className='try-btn' href={APP_TRY} target={'_blank'}>Try Now</a></li>
        </ul>
    </nav>
  )
}

export default NavBar