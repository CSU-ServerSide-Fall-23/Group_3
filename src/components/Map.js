import GoogleMapReact from 'google-map-react'
import LocationMaker from './LocationMaker'
import { useState } from 'react'

const Map = ({ eventData, center, zoom }) => {
  const markers = eventData.map(eventData => {
    if(eventData.categories[0].id === "volcanoes" ){
      return <LocationMaker lat={eventData.geometry[0].coordinates[1]}
                            lng={eventData.geometry[0].coordinates[0]}/>
    }
    return null
  })
  return (
    <div className="map">
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDymZ1ilLgyS4CpP4psnkpvQ5ZziEJSLjU'}}
            defaultCenter={ center}
            defaultZoom={ zoom }
            
        >
          {markers}
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