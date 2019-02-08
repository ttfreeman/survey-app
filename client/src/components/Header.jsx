import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends React.Component {
  state = {};
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Link to="/Login">Login</Link>;
      default:
        return [
          <li key="0">
            <Link to="/surveys">Dashboard</Link>
          </li>,
          <li key="1">
            <Payments />
          </li>,
          <li key="2" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }
  render() {
    return (
      <nav>
        <div
          className="nav-wrapper blue darken-2"
          style={{ padding: "0 1rem" }}
        >
          <Link to="/" className="brand-logo">
            AIS<i class="large material-icons">send</i>
          </Link>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProp({ auth }) {
  return { auth };
}

export default connect(mapStateToProp)(Header);
