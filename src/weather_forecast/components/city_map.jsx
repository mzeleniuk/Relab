import React from 'react';
import PropTypes from 'prop-types';
import {withGoogleMap, GoogleMap} from "react-google-maps";

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}}/>
));

const CityMap = (props) => {
  return (
    <SimpleMapExampleGoogleMap
      lon={props.lon}
      lat={props.lat}
      containerElement={<div className="city-map" style={{height: "100%"}}/>}
      mapElement={<div style={{height: "100%"}}/>}/>
  );
};

CityMap.propTypes = {
  lat: PropTypes.number,
  lon: PropTypes.number
};

export default CityMap;
