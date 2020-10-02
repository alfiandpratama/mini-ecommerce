import React from 'react'
import { useHistory } from 'react-router-dom'
import './header.style.css'

function Header ({ icon, isSearch, title, searchClick }) {
  const history = useHistory()

  return (
    <div className='header'>
      <div className='header__icon'>
        <div onClick={() => history.goBack()}>{icon}</div>
      </div>
      {isSearch ? (
        <div
          className='header__search-box'
          onClick={() => searchClick && history.push('/search')}
        >
          <input
            type='text'
            id='name'
            class='form-control'
            placeholder='Search'
          />
        </div>
      ) : (
        <div className='header__title'>{title}</div>
      )}
    </div>
  )
}

export default Header
