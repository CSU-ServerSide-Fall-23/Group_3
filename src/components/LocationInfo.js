const LocationInfo = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Event Information</h2>
            <ul>
                <li>ID: <strong>{ info.id }</strong></li>
                <li>TITLE: <strong>{ info.title }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfo