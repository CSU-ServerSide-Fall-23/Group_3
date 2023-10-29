import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { LocationVolcanoMarker, LocationStormMarker, LocationWildfireMarker } from './LocationMarker'

const Map = ({ eventData, center, zoom }) => {
  const [showVolcanoMarkers, setShowVolcanoMarkers] = useState(true)
  const [showStormMarkers, setShowStormMarkers] = useState(true)
  const [showWildfireMarkers, setShowWildfireMarkers] = useState(true)

  const volcanoMarkers = eventData
    .filter(eventData => showVolcanoMarkers && eventData.categories[0].id === "volcanoes")
    .map(eventData => (
      <LocationVolcanoMarker
        key = {eventData.id}
        lat = {eventData.geometry[0].coordinates[1]}
        lng = {eventData.geometry[0].coordinates[0]}
      />
    ))

  const stormMarkers = eventData
    .filter(eventData => showStormMarkers && eventData.categories[0].id === "severeStorms")
    .map(eventData => (
      <LocationStormMarker
        key = {eventData.id}
        lat = {eventData.geometry[0].coordinates[1]}
        lng = {eventData.geometry[0].coordinates[0]}
      />
    ))

  const wildfireMarkers = eventData
    .filter(eventData => showWildfireMarkers && eventData.categories[0].id === "wildfires")
    .map(eventData => (
      <LocationWildfireMarker
        key = {eventData.id}
        lat = {eventData.geometry[0].coordinates[1]}
        lng = {eventData.geometry[0].coordinates[0]}
      />
    ))

  return (
    <div className = "map">
      <button onClick = {() => setShowVolcanoMarkers(!showVolcanoMarkers)}>Toggle Volcanoes</button>
      <button onClick = {() => setShowStormMarkers(!showStormMarkers)}>Toggle Storms</button>
      <button onClick = {() => setShowWildfireMarkers(!showWildfireMarkers)}>Toggle Wildfires</button>
      <GoogleMapReact
        bootstrapURLKeys = {{ key: 'Your API Key Here'}}
        defaultCenter = {center}
        defaultZoom = {zoom}
      >
        {volcanoMarkers}
        {stormMarkers}
        {wildfireMarkers}
      </GoogleMapReact>
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 32.1574,
    lng: -82.9071
  },
  zoom: 0
}

export default Map
