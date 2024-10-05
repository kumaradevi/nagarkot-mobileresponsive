// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <p>
              <span className='highlight'>Achieve your</span><br />
              <span className='highlight'>goals with our</span><br />
              <span className='highlight'>Logistics Expertise</span><br />
              <span className='sub'>Unlock seamless logistics with tailored 3PL solutions, ensuring optimized operations to drive your business growth, whether you are a </span>
              <span className='sub'>startup, <br/>an SME, or an established enterprise. </span><br/>
            </p>
            <button className='btn'>GET A QUOTE</button>
        </div>
    </div>
  )
}

export default Hero;
