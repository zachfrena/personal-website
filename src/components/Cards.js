import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards () {
  return (
    <div className='cards'>
      <h1>Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              sr='/personal-website/src/images/garmin-project.jpg'
              text='Step Count Classification'
              label={['Python','Machine Learning','Scikit-Learn']}
              description="Investigating how machine learning algorithms can predict health and fitness outcomes when provided daily activity data."
              path='https://github.com/zachfrena/StepCountClassifier'
            />
            <CardItem
              sr='/images/vet-project.jpg'
              text='Veterinary System Application'
              label={['Java','Full-Stack','React']}
              description = 'Full-stack application to manage, update, add, and delete animals and their associated health conditions. Created for the school of Veterinary Medicine at the University of Calgary.'
              path='https://github.com/zachfrena/VeterinaryApp'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              sr='/images/movie-theatre.jpg'
              text='Movie Theatre Booking App' 
              label={['Java','Swing','MySQL']}
              description='Application that contains full functionality to book a movie ticket at a theatre.'
              path='https://github.com/zachfrena/MovieTheatreTicketRegistrationApp'
            />
            <CardItem
              sr='/images/personal-website.jpg'
              text='Personal Website (this one!)'
              description='Portfolio website built using HTML5 and CSS3 in a React framework to add interactivity and state management.'
              label={['React','HTML','CSS']}
              path='https://github.com/zachfrena/personal-website'
            />
            <CardItem
              sr='/images/img-8.jpg'
              text='More Projects (Coming Soon)!'
              label={[]}
              path='https://github.com/zachfrena'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
