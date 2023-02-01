import React from 'react'
import './components/Header/header.css'
import LogoCompany from './components/Header/header.png'

function Partners() {
  return (
    <>
    <div className='column'>
        <div className='container-header'>
            <p><img className='img-header' src={LogoCompany} alt="logo-coffeeMeet"/></p>
            <p><img className='img-header' src={LogoCompany} alt="logo-coffeeMeet"/></p>
            <p><img className='img-header' src={LogoCompany} alt="logo-coffeeMeet"/></p>
            <p><img className='img-header' src={LogoCompany} alt="logo-coffeeMeet"/></p>
            <p><img className='img-header' src={LogoCompany} alt="logo-coffeeMeet"/></p>
        </div>
        <div className='container-header'>
        <p>Our Partners</p>
        </div>
    </div>
    </>
  )
}

export default Partners
