import React, { Component } from "react";

class SubmitableForm extends Component {
  passFormDataTo(cb) {
    return event => {
      event.preventDefault();
      const data = this.getFormData(event.target);
      cb(data);
    };
  }

  getFormData(target) {
    const domData = new FormData(target);
    if (this.props.singleInput) return domData.get([...domData.keys()][0]);

    const data = {};
    [...domData.keys()].forEach(key => (data[key] = domData.get(key)));
    return data;
  }

  render() {
    return (
      <form
        ref={this.props.ref}
        style={this.props.style}
        onSubmit={this.passFormDataTo(this.props.handleSubmit)}
      >
        {this.props.children}
      </form>
    );
  }
}

export default SubmitableForm;
