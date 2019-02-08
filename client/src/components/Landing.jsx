import React from "react";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  state = {};
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div className="card horizontal">
          <div className="card-image" style={{ maxWidth: "35rem" }}>
            <img src="istockphoto-1090668580-2048x2048.jpg" alt="" />
          </div>
          <div className="card-stacked">
            <div className="card-content ">
              <h1>AI-Powered Surveys</h1>
              <p style={{ fontWeight: "700" }}>
                Deliver a more personalized customer experience using Artificial
                Intelliegence
              </p>
              <Link
                className="btn blue lighten-1"
                style={{ margin: "2rem" }}
                to="/Login"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div class="row" style={{ margin: "2rem 0" }}>
          <div class="col s4">
            <div class="center promo promo-example">
              <i class="large material-icons" style={{ color: "#1976d2" }}>
                flash_on
              </i>
              <h5 class="promo-caption">AutoDL</h5>
              <p class="light center">
                AutoDL makes it possible for users with limited expertise in
                deep learning to train high-quality custom models. Our
                unsupervised algorthm will train a model that can scale as
                needed to adapt to demands.
              </p>
            </div>
          </div>
          <div class="col s4">
            <div class="center promo promo-example">
              <i class="large material-icons" style={{ color: "#1976d2" }}>
                group
              </i>
              <h5 class="promo-caption">User Experience Focused</h5>
              <p class="light center">
                Our proprietary AutoDL offers higher model accuracy and faster
                time to create a production-ready model.By utilizing elements
                and principles of AI, we were able to create a framework that
                focuses on User Experience.
              </p>
            </div>
          </div>
          <div class="col s4">
            <div class="center promo promo-example">
              <i class="large material-icons" style={{ color: "#1976d2" }}>
                settings
              </i>
              <h5 class="promo-caption">Easy to work with</h5>
              <p class="light center">
                We have provided detailed documentation as well as specific code
                examples to help new users get started. Derive insight from
                surveys with our Cloud Survey API has never been easier.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
