import React, { Component } from "react";

class LoginPage extends Component {
  state = {};
  render() {
    const style = { margin: "1rem", width: "20rem" };
    return (
      <div className="row" style={{ margin: "10vh 0" }}>
        <div
          className="col s6 offset-s3"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <ul className="card-panel">
            <li>
              <a href="/auth/google" className="btn blue" style={style}>
                Login With Google
              </a>
            </li>
            <li>
              <a
                href="/auth/facebook"
                className="btn blue disabled"
                style={style}
              >
                Login With facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LoginPage;
