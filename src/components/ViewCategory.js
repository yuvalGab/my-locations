import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "react-router-redux";

class ViewCategory extends Component {
  componentDidMount() {
    if (!this.props.selectedCategoryId) {
      this.props.backToCategories();
    }
  }

  render() {
    if (this.props.selectedCategory) {
      return (
        <div>
          <div className="page-label">
            <h2>View Category</h2>
          </div>
          <section className="view-category">
            <p>
              <strong>name:</strong> {this.props.selectedCategory.name}
            </p>
          </section>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = state => ({
  selectedCategoryId: state.categories.selectedCategoryId,
  selectedCategory: state.categories.categoriesList.filter(c => {
    return c.id === +state.categories.selectedCategoryId;
  })[0]
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ backToCategories: () => push("/categories") }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ViewCategory);
