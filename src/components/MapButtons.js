

function MapButtons({ toggleVolcanoMarkers, toggleStormMarkers, toggleWildfireMarkers }) 
{
  return (
    <div className = "map-buttons">
      <button className = "btn-vol" onClick = { toggleVolcanoMarkers }>
        Toggle Volcanoes
      </button>
      <button className = "btn-vol" onClick = { toggleStormMarkers }>
        Toggle Storms
      </button>
      <button className = "btn-vol" onClick = { toggleWildfireMarkers} >
        Toggle Wildfires
      </button>
    </div>
  )
}

export default MapButtons