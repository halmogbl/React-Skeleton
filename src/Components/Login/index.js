import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  render() {
    return (
      <div className="col-12">
        <h1 className="text-warning">Login</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(null)(Login);
