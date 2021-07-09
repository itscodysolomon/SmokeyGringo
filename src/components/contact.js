import * as React from "react";
import { useState } from "react";
import ContactUs from "../components/form";
import Jobs from "./jobs";
import scrollTo from "gatsby-plugin-smoothscroll";

// markup
const Contact = () => {

    let [showJobPopup, setJobPopup] = useState(false);
    let [isFormSuccess, setFormSuccess] = useState(false);

    const handleClick = () => {
        setJobPopup(true);
    }

    const showFormSuccess = () => {
        setFormSuccess(true);
        scrollTo("#contact");
    }

    const closeJobPopup = () => {
        setJobPopup(false);
    }

    return (
        <section id="contact">
            <div className="content">
                {!isFormSuccess && 
                <div>
                    <h1>Contact Us</h1>
                    <p>Feel free to contact us about any concerns or questions. We offer catering and vending services for festivals, corporate, and small events. You can also reach us by phone <a href="tel:+14704293969" rel="noreferrer">(470)-429-3969</a>.We look forward to hearing from you.</p>
                    <ContactUs handleFormSuccess={showFormSuccess}></ContactUs>
                </div>
                }
                {isFormSuccess && 
                <div className="form-submitted">
                    <h1>Thanks for reaching out!</h1>
                    <h3>We'll get in touch with you soon.</h3>
                    <p>Reach us by phone <a href="tel:+14704293969" rel="noreferrer">(470)-429-3969</a></p>
                </div>
                }
                <p className="join-the-team"><a onClick={handleClick}>Want to be apart of the team?</a></p>
                <Jobs show={showJobPopup} handleClose={closeJobPopup}></Jobs>
            </div>
        </section>
    )
  }
  
export default Contact