import { Icon } from '@iconify/react'
import volcanoIcon from '@iconify/icons-mdi/volcano-outline'
import stormIcon from '@iconify/icons-mdi/cyclone-outline'
import wildfireIcon from '@iconify/icons-mdi/fire'

const LocationVolcanoMarker = ({ lat, lng }) => {
  return (
    <div className = "location-maker">
        <Icon icon = { volcanoIcon } className = "location-icon"/>
    </div>
  )
}

const LocationStormMarker = ({ lat, lng }) => {
  return (
    <div className = "location-maker">
        <Icon icon = { stormIcon } className = "location-icon"/>
    </div>
  )
}

const LocationWildfireMarker = ({ lat, lng }) => {
  return (
    <div className = "location-maker">
        <Icon icon = { wildfireIcon } className = "location-icon"/>
    </div>
  )
}

export { LocationStormMarker, LocationVolcanoMarker, LocationWildfireMarker }