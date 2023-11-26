import { FloatButton } from 'antd'
import { MdVolcano } from 'react-icons/md'
import { MdOutlineStorm } from 'react-icons/md'
import { MdLocalFireDepartment } from 'react-icons/md'


function MapButtons({ toggleVolcanoMarkers, toggleStormMarkers, toggleWildfireMarkers }) 
{
  return (
    <FloatButton.Group shape = 'square' style = {{ right: 19, bottom: 200 }}>
    <FloatButton icon = { <MdVolcano /> }onClick = { toggleVolcanoMarkers } tooltip = 'Volcanoes'/>
    <FloatButton icon = { <MdOutlineStorm /> }onClick = { toggleStormMarkers } tooltip = 'Storms'/>
    <FloatButton icon = { <MdLocalFireDepartment /> }onClick = { toggleWildfireMarkers } tooltip = 'Wildfires'/>
    </FloatButton.Group>
  )
}

export default MapButtons