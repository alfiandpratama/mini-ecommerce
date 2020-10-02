import React from 'react'
import Header from '../components/header/header.component'
import { ArrowLeftOutlined } from '@ant-design/icons'

function Search () {
  return (
    <div className='search'>
      <Header icon={<ArrowLeftOutlined />} isSearch />
      <div className='list-product'>
        <div className='box'>
          <img src='https://via.placeholder.com/100' alt='product' />
          <div className='box__desc'>
            <p>Nama Baju 1</p>
            <p>$15</p>
          </div>
        </div>
        <div className='box'>
          <img src='https://via.placeholder.com/100' alt='product' />
          <div className='box__desc'>
            <p>Nama Baju 2</p>
            <p>$15</p>
          </div>
        </div>
        <div className='box'>
          <img src='https://via.placeholder.com/100' alt='product' />
          <div className='box__desc'>
            <p>Nama Baju 3</p>
            <p>$15</p>
          </div>
        </div>
        <div className='box'>
          <img src='https://via.placeholder.com/100' alt='product' />
          <div className='box__desc'>
            <p>Nama Baju 4</p>
            <p>$15</p>
          </div>
        </div>
        <div className='box'>
          <img src='https://via.placeholder.com/100' alt='product' />
          <div className='box__desc'>
            <p>Nama Baju 5</p>
            <p>$15</p>
          </div>
        </div>
        <div className='box'>
          <img src='https://via.placeholder.com/100' alt='product' />
          <div className='box__desc'>
            <p>Nama Baju 6</p>
            <p>$15</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
