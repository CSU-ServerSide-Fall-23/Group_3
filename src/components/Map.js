import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationInfo from './LocationInfo'
import MapButtons from './MapButtons'
import MapMarkers from './MapMarkers' 

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null)
  const [map, setMap] = useState(null)
  const [showVolcanoMarkers, setShowVolcanoMarkers] = useState(false)
  const [showStormMarkers, setShowStormMarkers] = useState(false)
  const [showWildfireMarkers, setShowWildfireMarkers] = useState(false)

  const closeLocationInfo = () => {
    setLocationInfo(null)
  }

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
        bootstrapURLKeys = {{ key: 'AIzaSyDymZ1ilLgyS4CpP4psnkpvQ5ZziEJSLjU' }}
        defaultCenter = {center}
        defaultZoom = {zoom}
        onGoogleApiLoaded = {({ map }) => setMap(map)}
        options = {{ fullscreenControl: false , mapTypeControl: true }}
      />
      {locationInfo && <LocationInfo info = { locationInfo } onClose={ closeLocationInfo } />}
      <MapMarkers
        map = { map }
        eventData = { eventData }
        showVolcanoMarkers = { showVolcanoMarkers }
        showStormMarkers = { showStormMarkers }
        showWildfireMarkers = { showWildfireMarkers }
        setLocationInfo = { setLocationInfo }
      />
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