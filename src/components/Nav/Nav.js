import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {

  return (
    <div className='nav'>
      <div className='logo'>Ken's Consulting</div>
      <div className='links'>
        <Link className='link' to='/training'>Training</Link>
        <Link className='link' to='/consulting'>Consulting</Link>
        <Link className='link' to='/chat'>Live Chat</Link>
        <Link className='link' to='/faq'>FAQ</Link>
      </div>
    </div>
  )
}

export default Nav