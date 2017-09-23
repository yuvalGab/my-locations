import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import SubmitableForm from "./SubmitableForm";
import { editLocation } from "../modules/locations";
import SelectLocation from "./SelectLocation";

class EditLocation extends Component {
  state = {
    seletLocation: false,
    coordinates: ""
  };

  componentDidMount() {
    if (!this.props.selectedLocationId) {
      this.props.backToLocations();
    }
    if (this.props.selectedLocation) {
      this.coordinatesInput.value = this.props.selectedLocation.coordinates;
    }
  }

  editLocation = formData => {
    this.props.editLocation(this.props.selectedLocationId, formData);
    this.props.backToLocations();
  };

  closeMap = () => {
    this.setState({ seletLocation: false });
  };

  seletLocation = latLng => {
    this.closeMap();
    this.setState({ coordinates: latLng });
  };

  render() {
    const selectedLocation = this.props.selectedLocation;
    if (selectedLocation) {
      return (
        <div className="edit-wrapper">
          {(() => {
            if (this.state.seletLocation) {
              return (
                <SelectLocation
                  closeMap={this.closeMap}
                  seletLocation={this.seletLocation}
                />
              );
            }
          })()}
          <div>
            <div className="page-label">
              <h2>Edit Location</h2>
            </div>
            <section className="form">
              <SubmitableForm handleSubmit={this.editLocation}>
                <label>
                  name:
                  <input
                    type="text"
                    name="name"
                    required="true"
                    defaultValue={selectedLocation.name}
                    maxLength="20"
                  />
                </label>
                <label>
                  address:
                  <input
                    type="text"
                    name="address"
                    required="true"
                    defaultValue={selectedLocation.address}
                    maxLength="30"
                  />
                </label>
                <label
                  onClick={() => {
                    this.setState({ seletLocation: true });
                  }}
                  onFocus={() => {
                    this.setState({ seletLocation: true });
                  }}
                >
                  coordinates:
                  <input
                    type="text"
                    name="coordinates"
                    required="true"
                    maxLength="30"
                    value={this.state.coordinates}
                    ref={input => {
                      this.coordinatesInput = input;
                    }}
                  />
                </label>
                <label>
                  category:
                  <select
                    name="category"
                    defaultValue={selectedLocation.category}
                  >
                    <option value="general">general</option>
                    {this.props.categoriesList.map((l, i) => {
                      return (
                        <option key={i} value={l.name}>
                          {l.name}
                        </option>
                      );
                    })}
                  </select>
                </label>
                <button>save</button>
              </SubmitableForm>
            </section>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = state => ({
  selectedLocationId: state.locations.selectedLocationId,
  selectedLocation: state.locations.locationsList
    .filter(l => {
      return l.id === +state.locations.selectedLocationId;
    })
    .shift(),
  categoriesList: state.categories.categoriesList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { backToLocations: () => push("/"), editLocation },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(EditLocation);
