import React from 'react'

const Nav = () => {
  return (
    <nav class = "navbar navbar-expand-lg bg-body-tertiary nav-fill">
      <div class = "container-fluid">
        <img class = 'planetIcon' src = 'https://media.tenor.com/LYftKBBe2csAAAAi/earth-planet.gif' alt = 'planet earth spinning gif' height = {30} width = {30} />
        <div class = "collapse navbar-collapse btn-3" id = "navbarNav">
          <ul class = "navbar-nav">
            <li class = "nav-item">
              <a class = "nav-link active fw-bold" href = "http://localhost:3000/">
                  Natural Disaster Tracker
              </a>
            </li>
            <li class = "nav-item">
              <a class = "nav-link active fw-bold" href = "https://github.com/CSU-ServerSide-Fall-23/Group_3">
                  TrackMe
              </a>
            </li>
            <li class = "nav-item">
              <a class = "nav-link active fw-bold" href = "https://api.nasa.gov/">
                  NASA APIs
              </a>
            </li>
            <li class = "nav-item">
              <a class = "nav-link active fw-bold" href = "https://eonet.gsfc.nasa.gov/docs/v3">
                  EONET API
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
