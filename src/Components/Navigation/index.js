import React, { Component } from "react";
import { connect } from "react-redux";
import NavList from "./NavList";

class Navigation extends Component {
  render() {
    return (
      <div className="col-12">
        <NavList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(Navigation);
