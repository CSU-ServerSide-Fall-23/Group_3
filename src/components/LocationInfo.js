const LocationInfo = ({ info }) => {
  return (
    <div className = "location-info">
      <h2>Event Information</h2>
      <ul>
        <li>
          TYPE: <strong>{ info.type }</strong>
        </li>
        <li>
          NAME: <strong>{ info.title }</strong>
        </li>
        <li>
          EONET API ID: <strong>{ info.id }</strong>
        </li>
        <li>
          CORDINATES: <strong>{ info.coordinates }</strong>
        </li>
        <li>
          ADDITIONAL INFORMATION: <strong><a href = {info.link} target = "_blank" rel = "noopener noreferrer">{info.link}</a></strong>
        </li>
      </ul>
    </div>
  )
}

export default LocationInfo
/*
  import React, { useState } from 'react';

const LocationInfo = ({ info, onClose, isVisible, toggleVisibility }) => {
  return isVisible ? (
    <div className="location-info">
      <button type="button" className="btn-close" aria-label="Close" onClick={onClose}/>
 
      <h2>Event Information</h2>
      <ul>
        <li>
          TYPE: <strong>{info.type}</strong>
        </li>
        <li>
          NAME: <strong>{info.title}</strong>
        </li>
        <li>
          EONET API ID: <strong>{info.id}</strong>
        </li>
        <li>
          CORDINATES: <strong>{info.coordinates}</strong>
        </li>
        <li>
          ADDITIONAL INFORMATION:{' '}
          <strong>
            <a href={info.link} target="_blank" rel="noopener noreferrer">
              {info.link}
            </a>
          </strong>
        </li>
      </ul>
    </div>
  ) : (
    <button type="button" onClick={toggleVisibility}>
      Show Location Info
    </button>
  );
};

const LocationInfoContainer = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <LocationInfo
        info={{ type: 'Type', title: 'Title', id: 'ID', coordinates: 'Coordinates', link: 'Link' }}
        onClose={toggleVisibility}
        isVisible={isVisible}
        toggleVisibility={toggleVisibility}
      />
    </div>
  );
};

export default LocationInfoContainer;
*/
