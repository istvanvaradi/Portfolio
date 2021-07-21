import React from 'react'
import './Hero.scss'
import Logos from './Logos'
import ProfilePic from '../Pictures/picProf.png'
import Typewriter from 'typewriter-effect'

function Hero(props) {
  return (
    <div className="hero" style={{ width: '100wv' }}>
      <h1 className="text-muted">
        {props.title} Hi There! <br /> I am Istvàn a <br />{' '}
        <Typewriter
          options={{
            strings: ['Eager to learn', 'Passionate', 'Curious'],
            autoStart: true,
            loop: true,
          }}
        />
        Full Stack Developer
      </h1>
      <Logos className="container-fluid" />
      <img className="img-fluid" src={ProfilePic} alt="profile" />
    </div>
  )
}
export default Hero
