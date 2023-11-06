import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
//import { LocationVolcanoMarker, LocationStormMarker, LocationWildfireMarker } from './LocationMarker'
import volcanoIcon from './volcano.png'
import stormIcon from './storm.png'
import wildfireIcon from './wildfire.png'
import LocationInfo from './LocationInfo'

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState([])
  const [showVolcanoMarkers, setShowVolcanoMarkers] = useState(false)
  const [volcanoMarkers, setVolcanoMarkers] = useState([])

  const [showStormMarkers, setShowStormMarkers] = useState(false)
  const [stormMarkers, setStormMarkers] = useState([])

  const [showWildfireMarkers, setShowWildfireMarkers] = useState(false)
  const [wildfireMarkers, setWildfireMarkers] = useState([])

  const [map, setMap] = useState(null)

  useEffect(() => {
    if (map) {
      volcanoMarkers.forEach(marker => marker.setMap(null))
      stormMarkers.forEach(marker => marker.setMap(null))
      wildfireMarkers.forEach(marker => marker.setMap(null))

      if (showVolcanoMarkers) {
        const newVolcanoMarkers = eventData
          .filter(eventData => eventData.categories[0].id === 'volcanoes')
          .map(eventData => {
            return new window.google.maps.Marker({
              position: {
                lat: eventData.geometry[0].coordinates[1],
                lng: eventData.geometry[0].coordinates[0],
              },
              map: map,
              icon: {
                url: volcanoIcon,
                scaledSize: new window.google.maps.Size(24, 24),
              },
            })
          })

        setVolcanoMarkers(newVolcanoMarkers)
        setLocationInfo({ id: eventData.id, title: eventData.title })
      }

      if (showStormMarkers) {
        const newStormMarkers = eventData
          .filter(eventData => eventData.categories[0].id === 'severeStorms')
          .map(eventData => {
            return new window.google.maps.Marker({
              position: {
                lat: eventData.geometry[0].coordinates[1],
                lng: eventData.geometry[0].coordinates[0],
              },
              map: map,
              icon: {
                url: stormIcon,
                scaledSize: new window.google.maps.Size(24, 24),
              },
            })
          })

        setStormMarkers(newStormMarkers)
        setLocationInfo({ id: eventData.id, title: eventData.title })
      }

      if (showWildfireMarkers) {
        const newWildfireMarkers = eventData
          .filter(eventData => eventData.categories[0].id === 'wildfires')
          .map(eventData => {
            return new window.google.maps.Marker({
              position: {
                lat: eventData.geometry[0].coordinates[1],
                lng: eventData.geometry[0].coordinates[0],
              },
              map: map,
              icon: {
                url: wildfireIcon,
                scaledSize: new window.google.maps.Size(24, 24),
              },
            })
          })

        setWildfireMarkers(newWildfireMarkers)
        setLocationInfo({ id: eventData.id, title: eventData.title })
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, eventData, showVolcanoMarkers, showStormMarkers, showWildfireMarkers])

  return (
    <div className="map">
      <button className='btn-vol ' onClick={() => setShowVolcanoMarkers(!showVolcanoMarkers)}>Toggle Volcanoes</button>
      <button className='btn-vol' onClick={() => setShowStormMarkers(!showStormMarkers)}>Toggle Storms</button>
      <button className='btn-vol' onClick={() => setShowWildfireMarkers(!showWildfireMarkers)}>Toggle Wildfires</button>
     <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDymZ1ilLgyS4CpP4psnkpvQ5ZziEJSLjU' }}
        defaultCenter={center}
        defaultZoom={zoom}
        onGoogleApiLoaded={({ map }) => setMap(map)}
      >
      </GoogleMapReact>
      {locationInfo && <LocationInfo info={locationInfo} />}

    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 0,
    lng: 0,
  },
  zoom: 0,
}

export default Map
