import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { deleteLocation } from "../modules/locations";
import { deleteCategory } from "../modules/categories";

class Actions extends Component {
  deleteItem = () => {
    switch (this.props.appMode) {
      case "locations":
        if (this.props.selectedLocationId) {
          this.props.deleteLocation(this.props.selectedLocationId);
        }
        break;
      case "categories":
        if (this.props.selectedCategoryId) {
          this.props.deleteCategory(this.props.selectedCategoryId);
        }
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <div className="actions">
        <button
          onClick={() => this.props.changePage(`/${this.props.appMode}/view`)}
        >
          View
        </button>
        <button
          onClick={() => this.props.changePage(`/${this.props.appMode}/add`)}
        >
          Add
        </button>
        <button
          onClick={() => this.props.changePage(`/${this.props.appMode}/edit`)}
        >
          Edit
        </button>
        <button onClick={this.deleteItem}>Delete</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedLocationId: state.locations.selectedLocationId,
  selectedCategoryId: state.categories.selectedCategoryId
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { changePage: dir => push(dir), deleteLocation, deleteCategory },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
