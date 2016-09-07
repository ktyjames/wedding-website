import React from 'react'
import { connect } from 'react-redux'
import {GoogleMapLoader, GoogleMap, Marker, InfoWindow} from "react-google-maps"

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
        <div className="kraft-section">
          <div className="vertical-align-wrap">
            <div className="vertical-align vertical-align--middle">
              <h2>we are so honored that you are able to join us on our special day!</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <img className="header" src={require('../images/ceremony-reception.png')}/>
          <div className="container">
            <h2>Riverwood Manor <br /><br />
            3450 Highway 49 S <br />
            Harrisburg, NC 28075</h2>
            <br /><br /><br /><br />
            <h2>5pm</h2>
          </div>
        </div>

        <GoogleMapLoader
          containerElement={
            <div style={{
                height: 500,
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
                    onRightclick={() => this.onMarkerRightclick(index) } >

                    <InfoWindow
                      key={`${ `marker_${index}` }_info_window`}>
                      <div>
                        Riverwood Manor <br />
                        3450 Highway 49 S <br />
                        Harrisburg, NC 28075
                      </div>
                    </InfoWindow>

                  </Marker>
                );
              })}
            </GoogleMap>
          }/>

        <div className="container">
          <img className="header-two" src={require('../images/registries.png')}/>
          <div className="container">
            <a href="https://www.amazon.com/wedding/katy-james-phil-scott-harrisburg-october-2016/registry/CGGUIKUINVFQ" target="_blank"><img className="logo" src={require('../images/amazon-logo.png')}/></a>
            <a href="https://www.honeyfund.com/wedding/GreatScottLove" target="_blank"><img className="logo" src={require('../images/honeyfund-logo.png')}/></a>
          </div>
        </div>
        <div className="footer">
        </div>
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
