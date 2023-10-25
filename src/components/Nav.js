import React from 'react'

const Nav = () => {
  return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src='https://media.tenor.com/LYftKBBe2csAAAAi/earth-planet.gif' height={30} width={30} />
            </a>

            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="https://api.nasa.gov/">NASA APIs</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="https://eonet.gsfc.nasa.gov/api/v2.1/events">API</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
  )
}

export default Nav