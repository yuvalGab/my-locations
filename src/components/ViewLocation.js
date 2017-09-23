import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import LocationMap from "./LocationMap";

class ViewLocation extends Component {
  state = {
    showDefinition: false,
    showMap: false
  };

  componentDidMount() {
    if (!this.props.selectedLocationId) {
      this.props.backToLocations();
    }
  }

  closeMap = () => {
    this.setState({ showMap: false });
  };

  render() {
    const selectedLocation = this.props.selectedLocation;
    if (selectedLocation) {
      return (
        <div>
          <div className="page-label">
            <h2>View Location</h2>
          </div>
          <section className="view-location">
            {(() => {
              if (this.state.showDefinition) {
                return (
                  <div className="location-definition">
                    <p
                      onClick={() => {
                        this.setState({ showDefinition: false });
                      }}
                    >
                      back to view screen
                    </p>
                    <div className="definition-text">
                      <p>
                        <strong>name:</strong> {selectedLocation.name}
                      </p>
                      <p>
                        <strong>address:</strong> {selectedLocation.address}
                      </p>
                      <p>
                        <strong>coordinates:</strong>{" "}
                        {selectedLocation.coordinates}
                      </p>
                      <p>
                        <strong>category:</strong> {selectedLocation.category}
                      </p>
                    </div>
                  </div>
                );
              } else if (this.state.showMap) {
                return (
                  <LocationMap
                    closeMap={this.closeMap}
                    selectedLocation={selectedLocation}
                  />
                );
              } else {
                return (
                  <div className="view-options">
                    <button
                      onClick={() => {
                        this.setState({ showDefinition: true });
                      }}
                    >
                      show definition
                    </button>
                    <button
                      onClick={() => {
                        this.setState({ showMap: true });
                      }}
                    >
                      show map
                    </button>
                  </div>
                );
              }
            })()}
          </section>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = state => ({
  selectedLocationId: state.locations.selectedLocationId,
  selectedLocation: state.locations.locationsList.filter(l => {
    return l.id === +state.locations.selectedLocationId;
  })[0]
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ backToLocations: () => push("/") }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ViewLocation);
