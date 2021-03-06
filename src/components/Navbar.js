import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-warning'>
      <Link className='navbar-brand' to='/'>
        mPharma
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarTogglerDemo02'
        aria-controls='navbarTogglerDemo02'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
        <ul className='mt-2 ml-auto navbar-nav mt-lg-0'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/products/new'>
              <i className='mr-2 fas fa-plus'></i>
              create new product
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
