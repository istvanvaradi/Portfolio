import './About.scss'

import React from 'react'

const About = () => {
  return (
    <div style={{ height: '34vh' }} className="container-fluid text-center">
      <h1 style={{ position: 'relative' }} className="text-center">
        {' '}
        About me :{' '}
      </h1>
      <article className="row text-center">
        <div className="col-xl-6  text-center ">
          <p>
            I fall in love one with proggramming 1.5 years ago. Since than I
            write some each day. I love frontend and back-end as well. My first
            job was a charity website what you can see at the my projects
            section.
          </p>
        </div>
        <div className="col-xl-6  text-center">
          <h4 className="text-center text-warning"> Tech:</h4>
          <p className="text-center text-warning">
            #ReactJS #NodeJS #ExpressJs #Javascript #HTML #CSS #Bootstrap #EJS
            #MongoDB #NPM
          </p>
        </div>
      </article>
    </div>
  )
}

export default About
