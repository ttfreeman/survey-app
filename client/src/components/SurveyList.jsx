import React from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../actions";
import Chart from "react-google-charts";

class SurveyList extends React.Component {
  state = {};

  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div class="col s12 m7">
          <h4 class="header">{survey.title}</h4>
          <div class="card horizontal">
            <div class="card-image">
              <Chart
                width={"400px"}
                height={"200px"}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[["Year", "Yes", "no"], ["2014", survey.yes, survey.no]]}
                options={{
                  // Material design options
                  chart: {
                    title: "Survey Performance"
                  }
                }}
                // For tests
                rootProps={{ "data-testid": "2" }}
              />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>{survey.body}</p>
                <button>Yes: {survey.yes}</button>
                <button>No: {survey.no}</button>
              </div>
              <div class="card-action">
                <a href="#" className="btn red">
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps(state) {
  return { surveys: state.surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
