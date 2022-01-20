import React from 'react'
// import '../../App.css';
import './Map.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import travelData from '../../data/travel-data.json'
import { Button } from '../Button'

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [32, 48],
  iconAnchor: [16, 48]
})

// L.Marker.prototype.options.icon = DefaultIcon;

const position = [51.045, -114.072]
console.log(travelData[0].coordinates)

function Map () {
  return (
    <div className='z'>
      <div>
      
      </div>
      <div className='text-wrapper'>
      <a href="https://zachfrena.github.io/personal-website/" class="btn home"> <i class="fas fa-home"></i>&nbsp;Home</a>
        <h1>Where I've Been:</h1>
        <p>
          I created this page to share{' '}
          <span className='italicized'>some of</span> the places I've been in
          the world. As you can see, the majority of my travelling has been
          within my own province (Alberta), however I enjoy driving to Canada's
          West Coast whenever I can! I am always looking for new places to
          visit, so if you have any good recommendations please let me know!
        </p>
        <div className='small-text'>
          Apologies in advance for some of the lower quality photos-- I need a
          new camera!
        </div>
        <h2>How to use the map:</h2>
        <ul className='how-to-list'>
          <li>
            Zoom in and out of the map using the mouse wheel. Alternatively, use
            the [+] and [-] buttons in the upper left.
          </li>
          <li>
            Click on a blue marker for a pop-up containing a description and
            view a photo from that location. To close the pop-up, click the exit
            button in the upper right corner of the pop-up, or click somewhere
            else on the map.
          </li>
          <li>
            <span className='colourful'>Have fun exploring!</span>
          </li>
        </ul>
      </div>
      <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=77953aa104cd4645971be9f72512b51c'
        />

        {travelData.map(locations => (
          <Marker position={locations.coordinates} icon={DefaultIcon}>
            <Popup className='popup'>
              <img
                className='popup-image'
                src={process.env.PUBLIC_URL + locations.image}
                alt='Travel Image'
              />
              <p>{locations.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default Map
