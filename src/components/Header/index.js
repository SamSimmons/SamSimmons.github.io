import React from 'react'
import Logo from './Logo.js'
import './header.css'

const Header = (props) => {
  return (
    <div className="header">
      <Logo />
      <h1 className="header__title">Sam Simmons</h1>
    </div>
  )
}

export default Header
