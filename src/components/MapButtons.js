import { FloatButton } from 'antd';
import React from 'react';
import { MdVolcano } from "react-icons/md";
import { MdOutlineStorm } from "react-icons/md";
import { MdLocalFireDepartment } from "react-icons/md";


function MapButtons({ toggleVolcanoMarkers, toggleStormMarkers, toggleWildfireMarkers }) 
{
  return (
    <FloatButton.Group shape="circle" style={{ left: 24 }}>
    <FloatButton icon={<MdVolcano onClick = { toggleVolcanoMarkers }/>} tooltip='Volcanoes'/>
    <FloatButton icon={<MdOutlineStorm onClick = { toggleStormMarkers }/>}tooltip='Storms'/>
    <FloatButton icon={<MdLocalFireDepartment onClick = { toggleWildfireMarkers }/>}tooltip='Wildfires'/>

  </FloatButton.Group>

  )
}

export default MapButtons
