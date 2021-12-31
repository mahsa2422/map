import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../marker/marker';
import { useSelector } from 'react-redux';
const Map=()=>{
   const list=useSelector(state=>state.state)
    return (
        <>
        <h1>Google Map</h1>
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key:'AIzaSyA99-RJxQrX3AZC0au8_rqmHEjE7TZEikU'}}
            defaultCenter={{lat:35.689198,lng:51.388973}}
            defaultZoom={12}
          >
            {
              list ?
              list.map((item)=>{
                  return(
                    <Marker
                    lat={item.lat}
                    lng={item.long }
                    name={item.lable}
                    color="#e90800"
                  /> )})
              :null
              
            }
         
          </GoogleMapReact>
        </div>
        </>
      );
}
export default Map;