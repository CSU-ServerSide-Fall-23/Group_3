import React from 'react'

const Nav = () => {
  return (
        <nav class = "navbar navbar-expand-lg bg-body-tertiary nav-fill">
        <div class = "container-fluid">
            <a class = "navbar-brand">
                <img src = 'https://media.tenor.com/LYftKBBe2csAAAAi/earth-planet.gif' height = {30} width = {30} />
            </a>

            <div class = "collapse navbar-collapse btn-3" id = "navbarNav">
            <ul class = "navbar-nav">
                <li class = "nav-item">
                    <a class = "nav-link active fw-bold" href = "https://github.com/takapia95/Group_3/tree/main">TrackMe</a>
                </li>
                <li class = "nav-item">
                    <a class = "nav-link active fw-bold" href = "https://api.nasa.gov/">NASA APIs</a>
                </li>
                <li class = "nav-item">
                    <a class = "nav-link active fw-bold" href = "https://eonet.gsfc.nasa.gov/docs/v3">EONET</a>
                </li>
            </ul>
            <h4>Natural disaster tracker</h4>
            </div>
        </div>
        </nav>
  )
}

export default Nav