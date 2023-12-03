import { FloatButton } from 'antd'
import { MdVolcano } from 'react-icons/md'
import { MdOutlineStorm } from 'react-icons/md'
import { MdLocalFireDepartment } from 'react-icons/md'


function MapButtons({ toggleVolcanoMarkers, toggleStormMarkers, toggleWildfireMarkers }) 
{
  return (
    <FloatButton.Group className = "map-buttons" shape = 'square' style = {{ right: 19, bottom: 200 }}>
    <FloatButton className="toggle-volcano-markers" icon = { <MdVolcano /> }onClick = { toggleVolcanoMarkers } tooltip = 'Volcanoes'/>
    <FloatButton className="toggle-storm-markers" icon = { <MdOutlineStorm /> }onClick = { toggleStormMarkers } tooltip = 'Storms'/>
    <FloatButton className="toggle-wildfire-markers" icon = { <MdLocalFireDepartment /> }onClick = { toggleWildfireMarkers } tooltip = 'Wildfires'/>
    </FloatButton.Group>
  )
}

export default MapButtons
