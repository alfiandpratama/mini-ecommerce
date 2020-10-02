import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './banner.style.css'

function Banner ({ categories }) {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    pauseOnHover: true
  }

  return (
    <div className='banner'>
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.id} className='banner__box'>
            <img src={category.imageUrl} alt='category-img' className='banner__image' />
            <span className='banner__item-name'>
              {category.name}
            </span>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Banner
