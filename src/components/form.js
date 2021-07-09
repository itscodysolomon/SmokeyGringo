import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import emailjs from "emailjs-com";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};

  Object.entries(values).forEach(([key, val]) => {
    if (!val) {
      errors[key] = "Required";
    } else if (key === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)) {
      errors.email = "Invalid email address";
    }
  });

  return errors;
};

const ContactUS = (props) => {
  let [isSubmitting, setSubmitting] = useState(false);

  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      messageType: "",
      message: ""
    },
    validate,
    onSubmit: values => {
      setSubmitting(true)
      if (values.messageType === "catering") {
        emailjs.sendForm("service_zoiq3iq", "template_eq1knx4", document.querySelector("#smokey-form"), "user_h7cEoFTqO3hSl9auT46Ni").then((result) => {
          console.log(result.text);
          props.handleFormSuccess();
      }, (error) => {
          console.log(error.text);
      });
      } else if (values.messageType === "general") {
        emailjs.sendForm("service_q2lck12", "template_m5b72pu", document.querySelector("#smokey-form"), "user_h7cEoFTqO3hSl9auT46Ni").then((result) => {
          console.log(result.text);
          props.handleFormSuccess();
      }, (error) => {
          console.log(error.text);
      });
      }
    },
  });
  return (
    <form id="smokey-form" onSubmit={formik.handleSubmit}>
      <span id="message-label">What is your message about?</span>
      <div id="message-type" role="group">
        <label>
          <input type="radio" name="messageType" value="catering"
          checked={formik.values.messageType === "catering"}
          onChange={formik.handleChange} 
          className={(isSubmitting ? "disabled" : "")}/>
          <span>Catering</span>
        </label>
        <label>
          <input type="radio" name="messageType" value="general"
          checked={formik.values.messageType === "general"}
          onChange={formik.handleChange} 
          className={(isSubmitting ? "disabled" : "")}/>
          <span>General</span>
        </label>
      </div>
      {formik.errors.messageType ? <div className="form-error">{formik.errors.messageType}</div> : null}
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        onChange={formik.handleChange}
        value={formik.values.name}
        className={(isSubmitting ? "disabled" : "")}
      />
      {formik.errors.name ? <div className="form-error">{formik.errors.name}</div> : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
        className={(isSubmitting ? "disabled" : "")}
      />
      {formik.errors.email ? <div className="form-error">{formik.errors.email}</div> : null}

      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        id="phoneNumber"
        name="phoneNumber"
        type="text"
        placeholder="Phone Number"
        onChange={formik.handleChange}
        value={formik.values.phoneNumber}
        className={(isSubmitting ? "disabled" : "")}
      />
      {formik.errors.phoneNumber ? <div className="form-error">{formik.errors.phoneNumber}</div> : null}
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        onChange={formik.handleChange}
        value={formik.values.message}
        className={(isSubmitting ? "disabled" : "")}
      />
      {formik.errors.message ? <div className="form-error">{formik.errors.message}</div> : null}
      <button type="submit" className={"btn btn--blue " + (isSubmitting ? "disabled" : "")}>Send</button>
    </form>
  );
};

export default ContactUS