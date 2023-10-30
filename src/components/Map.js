import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
//import { LocationVolcanoMarker, LocationStormMarker, LocationWildfireMarker } from './LocationMarker'
import volcanoIcon from './volcano.png'
import stormIcon from './storm.png'
import wildfireIcon from './wildfire.png'

const Map = ({ eventData, center, zoom }) => {
  const [showVolcanoMarkers, setShowVolcanoMarkers] = useState(true)
  const [showStormMarkers, setShowStormMarkers] = useState(true)
  const [showWildfireMarkers, setShowWildfireMarkers] = useState(true)

  /*
  const volcanoMarkers = eventData
    .filter(eventData => showVolcanoMarkers && eventData.categories[0].id === "volcanoes")
    .map(eventData => (
      <LocationVolcanoMarker
        key = { eventData.id }
        lat = { eventData.geometry[0].coordinates[1] }
        lng = { eventData.geometry[0].coordinates[0] }
      />
    ))

  const stormMarkers = eventData
    .filter(eventData => showStormMarkers && eventData.categories[0].id === "severeStorms")
    .map(eventData => (
      <LocationStormMarker
        key = { eventData.id }
        lat = { eventData.geometry[0].coordinates[1] }
        lng = { eventData.geometry[0].coordinates[0] }
      />
    ))

  const wildfireMarkers = eventData
    .filter(eventData => showWildfireMarkers && eventData.categories[0].id === "wildfires")
    .map(eventData => (
      <LocationWildfireMarker
        key = { eventData.id }
        lat = { eventData.geometry[0].coordinates[1] }
        lng = { eventData.geometry[0].coordinates[0] }
      />
    ))
  */

  const [map, setMap] = useState(null)

  useEffect(() => {
    if (map) {
      if (showVolcanoMarkers) {
        eventData
          .filter(eventData => eventData.categories[0].id === "volcanoes")
          .forEach(eventData => {
            const marker = new window.google.maps.Marker({
              position: {
                lat: eventData.geometry[0].coordinates[1],
                lng: eventData.geometry[0].coordinates[0],
              },
              map: map,
              icon: {
                url: volcanoIcon, // Use the icon URL for volcanoes
                scaledSize: new window.google.maps.Size(40, 40), // Adjust the size if needed
              },
            })
          })
      }
    }
  }, [map, showVolcanoMarkers, eventData])

  useEffect(() => {
    if (map) {
      if (showStormMarkers) {
        eventData
          .filter(eventData => eventData.categories[0].id === "severeStorms")
          .forEach(eventData => {
            const marker = new window.google.maps.Marker({
              position: {
                lat: eventData.geometry[0].coordinates[1],
                lng: eventData.geometry[0].coordinates[0],
              },
              map: map,
              icon: {
                url: stormIcon, // Use the icon URL for volcanoes
                scaledSize: new window.google.maps.Size(40, 40), // Adjust the size if needed
              },
            })
          })
      }
    }
  }, [map, showStormMarkers, eventData])

  useEffect(() => {
    if (map) {
      if (showWildfireMarkers) {
        eventData
          .filter(eventData => eventData.categories[0].id === "wildfires")
          .forEach(eventData => {
            const marker = new window.google.maps.Marker({
              position: {
                lat: eventData.geometry[0].coordinates[1],
                lng: eventData.geometry[0].coordinates[0],
              },
              map: map,
              icon: {
                url: wildfireIcon, // Use the icon URL for volcanoes
                scaledSize: new window.google.maps.Size(40, 40), // Adjust the size if needed
              },
            })
          })
      }
    }
  }, [map, showWildfireMarkers, eventData])

  return (
    <div className = "map">
      <button onClick = {() => setShowVolcanoMarkers(!showVolcanoMarkers)}>Toggle Volcanoes</button>
      <button onClick = {() => setShowStormMarkers(!showStormMarkers)}>Toggle Storms</button>
      <button onClick = {() => setShowWildfireMarkers(!showWildfireMarkers)}>Toggle Wildfires</button>
      <GoogleMapReact
        bootstrapURLKeys = {{ key: 'AIzaSyDymZ1ilLgyS4CpP4psnkpvQ5ZziEJSLjU'}}
        defaultCenter = {center}
        defaultZoom = {zoom}
        onGoogleApiLoaded={({ map }) => setMap(map)}
      >
      </GoogleMapReact>
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
