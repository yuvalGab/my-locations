import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SubmitableForm from "./SubmitableForm";
import { addCategory } from "../modules/categories";
import { push } from "react-router-redux";

class AddCategory extends Component {
  addLocation = formData => {
    this.props.addCategory(formData);
    this.props.backToCategories();
  };

  render() {
    return (
      <div>
        <div className="page-label">
          <h2>Add Category</h2>
        </div>
        <section className="form">
          <SubmitableForm handleSubmit={this.addLocation}>
            <label>
              name:
              <input type="text" name="name" required="true" maxLength="15" />
            </label>
            <button>add</button>
          </SubmitableForm>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { addCategory, backToCategories: () => push("/categories") },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
