import { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationInfo from './LocationInfo'
import MapButtons from './MapButtons'
import volcanoIcon from './volcano.png'
import stormIcon from './storm.png'
import wildfireIcon from './wildfire.png'

const Map = ({ eventData, center, zoom }) => {

  const [locationInfo, setLocationInfo] = useState(null)
  const [map, setMap] = useState(null)
  const [showVolcanoMarkers, setShowVolcanoMarkers] = useState(false)
  const [showStormMarkers, setShowStormMarkers] = useState(false)
  const [showWildfireMarkers, setShowWildfireMarkers] = useState(false)
  const [markers, setMarkers] = useState({ volcano: [], storm: [], wildfire: [] })

  const createMarker = (event, iconUrl) => {
    const marker = new window.google.maps.Marker({ 
      position: { 
        lat: event.geometry[0].coordinates[1], 
        lng: event.geometry[0].coordinates[0], 
      },
      map: map,
      icon: { 
        url: iconUrl, 
        scaledSize: new window.google.maps.Size(24, 24) 
      }
    })
    marker.addListener('click', () => {
      setLocationInfo({ id: event.id, title: event.title, link: event.link })
    })
    return marker
  }

  useEffect(() => {
    if (map) {
      const newMarkers = { volcano: [], storm: [], wildfire: [] }

      eventData.forEach((event) => {
        const category = event.categories[0].id

        if (showVolcanoMarkers && category === 'volcanoes') {
          newMarkers.volcano.push(createMarker(event, volcanoIcon))
        }

        if (showStormMarkers && category === 'severeStorms') {
          newMarkers.storm.push(createMarker(event, stormIcon))
        }

        if (showWildfireMarkers && category === 'wildfires') {
          newMarkers.wildfire.push(createMarker(event, wildfireIcon))
        }
      })

      markers.volcano.forEach((marker) => marker.setMap(null))
      markers.storm.forEach((marker) => marker.setMap(null))
      markers.wildfire.forEach((marker) => marker.setMap(null))
      
      setMarkers(newMarkers)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, eventData, showVolcanoMarkers, showStormMarkers, showWildfireMarkers])

  return (
    <div className = "map">
      <MapButtons
        showVolcanoMarkers = {showVolcanoMarkers}
        showStormMarkers = {showStormMarkers}
        showWildfireMarkers = {showWildfireMarkers}
        toggleVolcanoMarkers = {() => setShowVolcanoMarkers(!showVolcanoMarkers)}
        toggleStormMarkers = {() => setShowStormMarkers(!showStormMarkers)}
        toggleWildfireMarkers = {() => setShowWildfireMarkers(!showWildfireMarkers)}
      />
      <GoogleMapReact
        bootstrapURLKeys = {{ key: 'key' }}
        defaultCenter = {center}
        defaultZoom = {zoom}
        onGoogleApiLoaded = {({ map }) => setMap(map)}
      />
      {locationInfo && <LocationInfo info = {locationInfo} />}
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 0,
    lng: 0
  },
  zoom: 0
}

export default Map
