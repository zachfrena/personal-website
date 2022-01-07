import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import { Link } from 'react-router-dom'

function HeroSection () {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Hey! I'm</h1>
      <p> Zach Frena</p>
    </div>
  )
}

export default HeroSection
