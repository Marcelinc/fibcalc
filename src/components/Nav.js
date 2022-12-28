import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <Link to='/' className='nav-link'>FibCalc</Link>
        <Link to='/about' className='nav-link'>About</Link>
    </nav>
  )
}

export default Nav