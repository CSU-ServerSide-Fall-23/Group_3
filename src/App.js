import {useState, useEffect} from 'react'
import Loader from './components/Loader'
import Map from './components/Map'
import Nav from './components/Nav'

function App() {

  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const  fetchEvents = async () => {
      setLoading (true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events')
      const {events} = await res.json()
      setEventData(events)
      setLoading(false)
    }
    fetchEvents()
  }, [])
  

  return (
    <div>
      <Nav/>
      { !loading ? <Map eventData = {eventData} /> : <Loader/> }
    </div>
  )
}

export default App
