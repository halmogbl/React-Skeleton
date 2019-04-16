import React, { Component } from "react";
import { connect } from "react-redux";
import loading from "../../assets/images/loading.gif";

class Loading extends Component {
  render() {
    return (
      <div className="col-12">
        <img style={{ width: 40 }} src={loading} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(null)(Loading);
