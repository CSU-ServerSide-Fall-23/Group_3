const LocationInfo = ({ info, onClose }) => {
  return (
    <div className = "location-info">
      <button type = "button" className = "btn-close" aria-label = "Close" onClick = { onClose }/>
      <h2>
        Event Information
      </h2>
      <ul>
        <li>
          TYPE: <strong>{ info.type }</strong>
        </li>
        <li>
          NAME: <strong>{ info.title }</strong>
        </li>
        <li>
          EONET API ID: <strong>{ info.id }</strong>
        </li>
        <li>
          CORDINATES: <strong>{ info.coordinates }</strong>
        </li>
        <li>
          ADDITIONAL INFORMATION: <strong><a href = {info.link} target = "_blank" rel = "noopener noreferrer">{ info.link }</a></strong>
        </li>
      </ul>
    </div>
  )
}

export default LocationInfo