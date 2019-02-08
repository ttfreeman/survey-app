import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./SurveyList";

class Dashboard extends React.Component {
  state = {};
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <SurveyList />
        <div className="fixed-action-btn" style={{ margin: "4rem" }}>
          <Link to="/surveys/new" className="btn-floating btn-large blue">
            <i className="large material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
