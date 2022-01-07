import { Link } from 'react-router-dom'
import React from 'react'
import './Cards.css'

function CardItem (props) {
  return (
    <>
      <li className='cards__item'>
        <a className='cards__item__link' href={props.path} target='_blank'>
          <div className='header'>
            <div className='tag'>
              <div>{props.label[0]}</div>
            </div>
            <div className='tag'>
              <div>{props.label[1]}</div>
            </div>
            <div className='tag'>
              <div>{props.label[2]}</div>
            </div>
          </div>
          <figure className='cards__item__tag' data-category={props.label}>
            <img
              src={process.env.PUBLIC_URL + props.sr}
              alt='Travel Image'
              className='cards__item__img'
            />
          </figure>
          <div className='overlay'>
            <div className='overlay-text'>
            {props.description}
              </div>
          </div>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  )
}

export default CardItem
