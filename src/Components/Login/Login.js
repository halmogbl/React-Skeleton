import React, { Component } from "react";

import { Input } from "react-input-component";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import "../../assets/css/Auth.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    loginalertUsername: false,
    loginalertPassword: false
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async e => {
    e.preventDefault();
    if (this.state.username && this.state.passsword) {
      await this.setState({
        loginalertUsername: false,
        loginalertPassword: false
      });
    } else {
      if (!this.state.username) {
        this.setState({ loginalertUsername: true });
        if (!this.state.password) {
          this.setState({ loginalertPassword: true });
        }
      }
    }
    this.props.login(this.state, this.props.history);
  };

  render() {
    return (
      <div className="create_account_screen">
        <div className="create_account_form">
          <h3>Login</h3>
          <form onSubmit={this.submitHandler}>
            {this.state.loginalertUsername ? (
              <div className="col-12 alert alert-danger" role="alert">
                Wrong Username
              </div>
            ) : (
              <></>
            )}
            <label htmlFor="userName">User Name</label>
            <Input
              text="User Name"
              name="username"
              value={this.state.username}
              className="form-control"
              onChange={this.changeHandler}
              //   emptyMessage="User Name can't be empty"
            />
            {this.state.loginalertPassword ? (
              <div
                style={{ marginTop: 20 }}
                className="col-12 alert alert-danger"
                role="alert"
              >
                Wrong Password
              </div>
            ) : (
              <></>
            )}

            <div className="password">
              <label htmlFor="Password">Password</label>
              <Input
                text="Password"
                type="password"
                name="password"
                value={this.state.passsword}
                //   emptyMessage="Password is invalid"
                className="form-control"
                onChange={this.changeHandler}
              />
            </div>
            <div className="col-12">
              <button
                style={{ padding: 9 }}
                type="submit"
                className="btn btn-success col-12"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (userData, history) =>
      dispatch(actionCreators.login(userData, history))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
