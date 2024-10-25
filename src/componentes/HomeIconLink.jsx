import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const HomeIconLink = () => {
  return (
    <div className='about-link'>
        <Link to="/">
        <FaHome siza = { 30 } />
        </Link>
    </div>
  )
}

export default HomeIconLink