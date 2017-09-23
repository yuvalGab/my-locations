import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import SubmitableForm from "./SubmitableForm";
import { editCategory } from "../modules/categories";

class EditCategory extends Component {
  componentDidMount() {
    if (!this.props.selectedCategoryId) {
      this.props.backToCategories();
    }
  }

  editCategory = formData => {
    this.props.editCategory(this.props.selectedCategoryId, formData);
    this.props.backToCategories();
  };

  render() {
    const selectedCategory = this.props.selectedCategory;
    if (selectedCategory) {
      return (
        <div>
          <div className="page-label">
            <h2>Edit Location</h2>
          </div>
          <section className="form">
            <SubmitableForm handleSubmit={this.editCategory}>
              <label>
                name:
                <input
                  type="text"
                  name="name"
                  required="true"
                  defaultValue={selectedCategory.name}
                  maxLength="15"
                />
              </label>
              <button>save</button>
            </SubmitableForm>
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
  selectedCategory: state.categories.categoriesList
    .filter(c => {
      return c.id === +state.categories.selectedCategoryId;
    })
    .shift()
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { backToCategories: () => push("/categories"), editCategory },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory);
