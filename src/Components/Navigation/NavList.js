import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { withRouter } from "react-router-dom";

class NavList extends Component {
  render() {
    return (
      <div
        className="col-12"
        style={{
          background: "#212629",
          color: "#fff",
          //position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: 10
        }}
      >
        <div
          className="col-lg-1 col-md-3 col-sm-4"
          style={{ textAlign: "center", padding: 6 }}
        >
          <Link style={{ color: "#fff" }} className="" to={`/home`}>
            Sekail
          </Link>
        </div>

        <div className=" col-lg-3 col-md-4 col-sm-4 ">
          <div className=" col-lg-9 col-md-9 col-sm-9">
            {!this.props.user ? (
              <>
                <div
                  className="col-6"
                  style={{ textAlign: "center", padding: 5 }}
                >
                  <NavLink
                    style={{ color: "#fff", textDecoration: "none" }}
                    className=""
                    to={`/login`}
                  >
                    Login
                  </NavLink>
                </div>
                <div
                  className="col-6"
                  style={{ textAlign: "center", padding: 5 }}
                >
                  <NavLink
                    style={{ color: "#fff", textDecoration: "none" }}
                    className=""
                    to={`/signup`}
                  >
                    Signup
                  </NavLink>
                </div>
              </>
            ) : (
              <>
                <div
                  className="col-6"
                  style={{ textAlign: "center", padding: 5 }}
                >
                  <button
                    onClick={() => this.props.logout(this.props.history)}
                    className=""
                    style={{}}
                  >
                    logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};
const mapDispatchToProps = dispatch => ({
  logout: history => dispatch(actionCreators.logout(history))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavList)
);
