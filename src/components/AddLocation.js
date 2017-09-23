import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SubmitableForm from "./SubmitableForm";
import { addLocation } from "../modules/locations";
import { push } from "react-router-redux";
import SelectLocation from "./SelectLocation";

class AddLocation extends Component {
  state = {
    seletLocation: false,
    coordinates: ""
  };

  addLocation = formData => {
    this.props.addLocation(formData);
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
    return (
      <div className="add-wrapper">
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
            <h2>Add Location</h2>
          </div>
          <section className="form">
            <SubmitableForm handleSubmit={this.addLocation}>
              <label>
                name:
                <input type="text" name="name" required="true" maxLength="20" />
              </label>
              <label>
                address:
                <input
                  type="text"
                  name="address"
                  required="true"
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
                />
              </label>
              <label>
                category:
                <select name="category">
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
              <button>add</button>
            </SubmitableForm>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categoriesList: state.categories.categoriesList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { addLocation, backToLocations: () => push("/") },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AddLocation);
