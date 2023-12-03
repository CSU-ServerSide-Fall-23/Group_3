import { useState, useEffect } from 'react'
import stormIcon from '../media/storm.png'
import storm2Icon from '../media/storm2.png'
import volcanoIcon from '../media/volcano.png'
import wildfireIcon from '../media/wildfire.png'

const MapMarkers = ({ map, eventData, showVolcanoMarkers, showStormMarkers, showWildfireMarkers, setLocationInfo }) => {
  const [markers, setMarkers] = useState({ volcano: [], storm: [], wildfire: [] })

  const createMarker = (event, category) => {
    const icons = {
      severeStorms: stormIcon,
      volcanoes: volcanoIcon,
      wildfires: wildfireIcon,
    }

    const magnitudeValue = event.geometry[0].magnitudeValue
    let icon

    if ((category === 'severeStorms') && magnitudeValue < 69) {
      icon = storm2Icon
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

    const title = event.title

    const indexOfDash = title.indexOf('-')
    const indexOfComma = title.indexOf(',')

    if (indexOfDash !== -1 && (indexOfComma === -1 || indexOfDash < indexOfComma)) {
      event.title = title.substring(0, indexOfDash).trim()
    }
    else if (indexOfComma !== -1 && (indexOfDash === -1 || indexOfComma < indexOfDash)) {
      event.title = title.substring(0, indexOfComma).trim()
    }

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
  }, [map, eventData, showVolcanoMarkers, showStormMarkers, showWildfireMarkers, setLocationInfo])

  return (
    <div className="map-markers">
    </div>
  )
}

export default MapMarkers
