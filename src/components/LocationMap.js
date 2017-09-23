import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const mapStyle = {
  width: "90%",
  height: "90%",
  top: "45%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

export class LocationMap extends Component {
  render() {
    const coordinates = this.props.selectedLocation.coordinates.split(",");
    const lat = coordinates[0].trim();
    const lng = coordinates[1].trim();

    return (
      <div className="location-map">
        <p onClick={this.props.closeMap}>back to view screen</p>
        <Map
          style={mapStyle}
          google={this.props.google}
          zoom={12}
          initialCenter={{
            lat,
            lng
          }}
        >
          <Marker
            title={this.props.selectedLocation.name}
            position={{ lat, lng }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDwNY0qLdsh2mXOeaLN3rSWnBrEqjBmtss"
})(LocationMap);
