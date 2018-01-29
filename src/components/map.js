import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

export default class Map extends Component {
  static defaultProps = {
    center: { lat: -33.9568118, lng: 151.1416668 },
    zoom: 11,
  }
render() {
    return (
      <div className='google-map'>
        <GoogleMapReact
          style={{width: '100vw', height: '90vh', position: 'relative', overflowX: 'hidden'}}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
        </GoogleMapReact>
      </div>
    )
  }
}


