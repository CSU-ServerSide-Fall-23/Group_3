import { useEffect } from 'react'

const UserLocation = ({ setMapCenter }) => {

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setMapCenter({ lat: latitude, lng: longitude })
        },
        (error) => {
          console.error('Error getting user location:', error)
        }
      )
    } else {
      console.error('Geolocation is not supported by your browser')
    }
  }, [setMapCenter])

  return null
}

export default UserLocation