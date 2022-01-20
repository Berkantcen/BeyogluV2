import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import Logo from '../assets/img/logo_black-min.png'

const Landing = () => {
  return (
    <div className='landing'>
      <img src={Logo} alt='beyoglu gurme' />
      <div className='landing-message'>
        <h1>Hoşgeldiniz</h1>
        <p>
          {' '}
          <BsInstagram /> BeyogluGurme
        </p>
      </div>
    </div>
  )
}

export default Landing
