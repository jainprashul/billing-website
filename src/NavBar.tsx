import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <nav className='nav'>
        <div className=" nav-wrapper blue darken-1 px1">
            <h3 className='logo'><span>B</span>illin' Inc</h3>
        </div>

        {/* List  */}
        {/* Home , Features , Why , About , Try Now */}

        <ul className='nav-items'>
            <li><a href='#'>Home</a></li>
            <li><a href='#features'>Features</a></li>
            <li><a href='#why'>Why</a></li>
            <li><a href='#about'>About</a></li>
            <li><a className='try-btn' href='#'>Try Now</a></li>
        </ul>

        
        
    </nav>
  )
}

export default NavBar