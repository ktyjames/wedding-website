import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/nav'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps"

class Details extends React.Component {
  constructor(props){
    super(props)
  }

  onMapClick =()=>{

  }

  onMarkerRightclick =()=>{

  }

  render(){

    const { markers } = this.props

    return(
      <div>
        <div className="details">
          <Nav location="details"/>
        </div>
        <div className="kraft-section">
          <div className="vertical-align-wrap">
            <div className="vertical-align vertical-align--middle">
              <h2>we are so honored that you are able to join us on our special day!</h2>
            </div>
          </div>
        </div>
          <GoogleMapLoader
            containerElement={
              <div style={{
                  height: 200,
                  width: '100%' }}/> }
            googleMapElement={
              <GoogleMap
                defaultOptions={{
                  draggable: false,
                  zoomControl: false,
                  scrollwheel: false,
                  disableDoubleClickZoom: true
                }}
                defaultZoom={ 15 }
                defaultCenter={{
                  lat: 35.329155,
                  lng: -80.634645,
                }}
                onClick={ this.onMapClick }>
                {markers.map((marker, index) => {
                  return (
                    <Marker
                      draggable={ false }
                      {...marker}
                      onRightclick={() => this.onMarkerRightclick(index) } />
                  );
                })}
              </GoogleMap>
            }/>
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    markers: state.details.markers
  }
}

export default connect(mapStateToProps, {

})(Details)
