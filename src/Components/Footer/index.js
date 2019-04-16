import React, { Component } from "react";
import { connect } from "react-redux";

class Footer extends Component {
  render() {
    return (
      <div className="col-12" style={{ marginTop: 20 }}>
        <footer
          className="page-footer font-small cyan darken-3"
          style={{ background: "#fff", paddingTop: 30, paddingBottom: 30 }}
        >
          <div className="footer-copyright text-center py-3">
            © 2019 Copyright
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(Footer);
