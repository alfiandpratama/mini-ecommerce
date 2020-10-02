import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.style.css'

function Navigation () {
  return (
    <div className='navigation'>
      <ul>
        <li>Home</li>
        <li>Feed</li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
        <li>Profile</li>
      </ul>
    </div>
  )
}

export default Navigation
