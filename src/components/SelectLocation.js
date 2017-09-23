import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyle = {
  width: "90%",
  height: "90%",
  top: "45%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

export class SelectLocation extends Component {
  mapClicked = (mapProps, map, clickEvent) => {
    const latLng = clickEvent.latLng.lat() + "," + clickEvent.latLng.lng();
    this.props.seletLocation(latLng);
  };

  render() {
    return (
      <div className="location-map select-location">
        <p onClick={this.props.closeMap}>back to add location screen</p>
        <Map
          style={mapStyle}
          google={this.props.google}
          zoom={12}
          onClick={this.mapClicked}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDwNY0qLdsh2mXOeaLN3rSWnBrEqjBmtss"
})(SelectLocation);
