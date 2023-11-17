import { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationInfo from './LocationInfo'
import MapButtons from './MapButtons'
import placeholderIcon from '../media/placeholder.png'
import stormIcon from '../media/storm.png'
import volcanoIcon from '../media/volcano.png'
import wildfireIcon from '../media/wildfire.png'

const Map = ({ eventData, center, zoom }) => {

  const [locationInfo, setLocationInfo] = useState(null)
  const [map, setMap] = useState(null)
  const [showVolcanoMarkers, setShowVolcanoMarkers] = useState(false)
  const [showStormMarkers, setShowStormMarkers] = useState(false)
  const [showWildfireMarkers, setShowWildfireMarkers] = useState(false)
  const [markers, setMarkers] = useState({ volcano: [], storm: [], wildfire: [] })

  const createMarker = (event, category) => {
    const icons = {
      severeStorms: stormIcon,
      volcanoes: volcanoIcon,
      wildfires: wildfireIcon,
    }

    const magnitudeValue = event.geometry[0].magnitudeValue
    let icon

    if ((category === 'severeStorms') && magnitudeValue < 64) {
      icon = placeholderIcon
    } else {
      icon = icons[category]
    }

    const marker = new window.google.maps.Marker({
      position: {
        lat: event.geometry[0].coordinates[1],
        lng: event.geometry[0].coordinates[0],
      },
      map: map,
      icon: {
        url: icon,
        scaledSize: new window.google.maps.Size(24, 24),
      },
    })

    marker.addListener('click', () => {
      setLocationInfo({ 
        coordinates: event.geometry[0].coordinates[0] + ", "+ event.geometry[0].coordinates[1],
        id: event.id, 
        link: event.sources[0].url, 
        title: event.title, 
        type: event.categories[0].title
      })
    })

    return marker
  }

  useEffect(() => {
    if (map) {
      const newMarkers = { volcano: [], storm: [], wildfire: [] }

      eventData.forEach((event) => {
        const category = event.categories[0].id

        if (showVolcanoMarkers && category === 'volcanoes') {
          newMarkers.volcano.push(createMarker(event, 'volcanoes'))
        }

        if (showStormMarkers && category === 'severeStorms') {
          event.geometry.forEach((coordinate) => {
            newMarkers.storm.push(createMarker({ ...event, geometry: [{ ...coordinate }] }, 'severeStorms'))
          })
        }

        if (showWildfireMarkers && category === 'wildfires') {
          newMarkers.wildfire.push(createMarker(event, 'wildfires'))
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
      >
      </GoogleMapReact>
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
