import React from 'react'
import './About.css'
import {Link} from 'react-router-dom'

function About () {
  return (
    <div className='about-container'>
      <div className='social-media-icons'>
        <a
          class='social-icon-link linkedin'
          href='https://www.linkedin.com/in/zachary-frena/'
          target='_blank'
          aria-label='LinkedIn'
        >
          <i class='fab fa-linkedin' /> Linkedin
        </a>
        <a
          class='social-icon-link github'
          href='https://github.com/zachfrena'
          target='_blank'
          aria-label='github'
        >
          <i class='fab fa-github' /> GitHub
        </a>
        <a
          class='social-icon-link email'
          href='mailto:z.frena@gmail.com'
          target='_blank'
          aria-label='email'
        >
          <i class='fas fa-envelope-square'></i> Email
        </a>
      </div>
      <h1>About Me</h1>
      <div>
        <p>
          <span class='important'>My name is Zach Frena</span> and I am
          currently a graduate student pursuing a masters degree in software
          engineering. I have an undergraduate degree in mechanical engineering,
          and I love designing, testing, and building things (physical, digital,
          and combined!). I am always striving to further develop my skillset
          through extensive involvement on club teams, non-profit positions, and
          technical hobbies and extra-curriculars.{' '}
          <span class='important'>
            I am passionate about using technology to change the world for the
            better{' '}
          </span>
          (energy/environment, healthcare, education, etc.), and I would love to
          work at an innovative, impactful company whose core mission is helping
          people.
        </p>
      </div>
      <div className='where-ive-been-button'>
        <i class='fas fa-map-marker-alt'>&nbsp;Currently based in Calgary, Alberta.&nbsp;&nbsp;</i>
        <Link to='/where-ive-been'>
          [Click here to see where I've been before]
        </Link>
      </div>
    </div>
  )
}

export default About
