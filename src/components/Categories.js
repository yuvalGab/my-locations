import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Actions from "./Actions";
import { selectCategory } from "../modules/categories";

class Categories extends Component {
  selectCategory = e => {
    this.props.selectCategory(e.target.id);
  };

  isItemSelected = itemId => {
    if (
      itemId === +this.props.selectedCategoryId &&
      this.props.selectedCategoryId
    ) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <div>
        <div className="page-label">
          <h2>Categories</h2>
        </div>
        <Actions appMode="categories" />
        <section className="list categories">
          {this.props.categoriesList.map((l, i) => {
            return (
              <div
                className={this.isItemSelected(l.id) ? "item selected" : "item"}
                key={i}
                id={l.id}
                onClick={this.selectCategory}
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
  categoriesList: state.categories.categoriesList,
  selectedCategoryId: state.categories.selectedCategoryId
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectCategory }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
