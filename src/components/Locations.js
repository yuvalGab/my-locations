import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Actions from "./Actions";
import { selectLocation } from "../modules/locations";

navigator.vibrate =
  navigator.vibrate ||
  navigator.webkitVibrate ||
  navigator.mozVibrate ||
  navigator.msVibrate;

class Locations extends Component {
  state = {
    orderBy: "old to new",
    category: "all"
  };

  selectLocation = e => {
    this.props.selectLocation(e.target.id);
    navigator.vibrate(200);
  };

  isItemSelected = itemId => {
    if (
      itemId === +this.props.selectedLocationId &&
      this.props.selectedLocationId
    ) {
      return true;
    } else {
      return false;
    }
  };

  printCategoriesOptions = () => {
    let categoriesOptions = [];
    const locationsList = this.props.locationsList;
    for (let i = 0; i < locationsList.length; i++) {
      const category = locationsList[i].category;
      if (!categoriesOptions.includes(category)) {
        categoriesOptions.push(category);
      }
    }
    return categoriesOptions.map((o, i) => {
      return (
        <option key={i} value={o}>
          {o}
        </option>
      );
    });
  };

  changeOrderBy = e => {
    this.setState({ orderBy: e.target.value });
    this.props.selectLocation(null);
  };

  changeCategory = e => {
    this.setState({ category: e.target.value });
    this.props.selectLocation(null);
  };

  sortLocations = (locations, key) => {
    return locations.sort((a, b) => {
      a = key === "name" ? a[key].toLowerCase() : a[key];
      b = key === "name" ? b[key].toLowerCase() : b[key];
      return a < b ? -1 : a > b ? 1 : 0;
    });
  };

  setLocations = () => {
    let locations = this.props.locationsList;
    if (this.state.orderBy === "alphabetical") {
      locations = this.sortLocations(locations, "name");
    } else {
      locations = this.sortLocations(locations, "id");
    }
    if (this.state.category !== "all") {
      locations = locations.filter(l => {
        return l.category === this.state.category;
      });
    }
    return locations;
  };

  render() {
    let locations = this.setLocations();

    return (
      <div>
        <div className="page-label">
          <h2>Locations</h2>
        </div>
        <Actions appMode="locations" />
        <section className="filtering">
          <label>
            order by:
            <select onChange={this.changeOrderBy}>
              <option value="old to new">old to new</option>
              <option value="alphabetical">alphabetical</option>
            </select>
          </label>
          <label>
            category:
            <select onChange={this.changeCategory}>
              <option value="all">all</option>
              {this.printCategoriesOptions()}
            </select>
          </label>
        </section>
        <section className="list locations">
          {locations.map((l, i) => {
            return (
              <div
                className={this.isItemSelected(l.id) ? "item selected" : "item"}
                key={i}
                id={l.id}
                onClick={this.selectLocation}
              >
                <span>{l.name}</span>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locationsList: state.locations.locationsList,
  selectedLocationId: state.locations.selectedLocationId
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectLocation }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
