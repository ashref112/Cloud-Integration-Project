import React from 'react'
import './Map.css'
import GoogleMapReact from 'google-map-react'

function Map({ location, zoomLevel })  {
    // const LocationPin = ({ text }) => (
    //     <div className="pin">
    //       <Icon icon={locationIcon} className="pin-icon" />
    //       <p className="pin-text">{text}</p>
    //     </div>
    //   )
    return(
    <div className="map" >
      <h2 className="map-h2">Come Visit Us At GoMyCode Manzah 5</h2>
      <div className="google-map" style={{padding:"50px"}}>
      <GoogleMapReact
       
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
       
      </GoogleMapReact>
      MP
    </div>
      
      </div>
      )
}
export  default Map;