import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmail";
import formFields from "./formFields";

class SurveyForm extends React.Component {
  renderFields() {
    return formFields.map(({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          label={label}
          name={name}
          type="text"
        />
      );
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <button type="submit" className="teal btn-flat right white-text">
            Submit
            <i className="material-icons right">chevron_right</i>
          </button>
          <Link to="/surveys" className="red btn-flat left white-text">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "You must provide a title";
  }
  if (!values.subject) {
    errors.subject = "You must provide a subject";
  }
  if (!values.body) {
    errors.body = "You must provide an email body";
  }
  if (!values.recipients) {
    errors.recipients = "You must provide recipients";
  } else {
    errors.recipients = validateEmails(values.recipients);
  }

  return errors;
}

export default reduxForm({
  validate: validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
