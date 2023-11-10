import Map from './components/Map'
import {useState, useEffect} from 'react'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Header from './components/Header'
import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import React from 'react';
import volcano from '@iconify/icons-mdi/volcano'
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
      <Header/> 
      <Nav/>
      { !loading ? <Map eventData = {eventData} /> : <Loader/> }
      <FloatButton.Group shape="circle" style={{ left: 24 }}>
      <FloatButton icon={<QuestionCircleOutlined />} />
      <FloatButton />
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
    </div>
  )
}

export default App
