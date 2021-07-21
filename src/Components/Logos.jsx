import React from 'react'
import './Logos.scss'
import ExpressLogo from '../Pictures/exp.png'
export default function Logos() {
  return (
    <div className="boxMai">
      <img
        alt="img"
        src="https://img.icons8.com/color/48/000000/javascript--v2.png"
      />
      <img
        alt="img"
        src="https://img.icons8.com/color/48/000000/html-5--v2.png"
      />
      <img alt="img" src="https://img.icons8.com/color/48/000000/css3.png" />
      <img alt="img" src="https://img.icons8.com/dusk/64/000000/react.png" />
      <img alt="img" src="https://img.icons8.com/color/48/000000/nodejs.png" />
      <img alt="img" style={{ width: '64px' }} src={ExpressLogo} />
      <img alt="img" src="https://img.icons8.com/color/48/000000/mongodb.png" />
    </div>
  )
}
