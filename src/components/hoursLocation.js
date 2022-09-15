
import * as React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import scrollArrow from "../assets/images/scroll-down-arrow-blue.svg";

// markup
const HoursLocation = () => {
    return (
        <section id="hoursLocation">
            <div className="content">
                <h1>HOURS &amp; LOCATION</h1>
                <p>
                    <small>Monday: Closed</small><br />
                    <small>Tuesday: 4PM - 8PM</small><br />
                    <small>Wednesday &amp; Thursday: 11AM - 8PM</small><br />
                    <small>Friday - Sunday: 11AM - 9PM</small>
                </p>
                <p><a href="https://goo.gl/maps/nNumfvJagawNah9R9" target="_blank" rel="noreferrer">49 North Jackson Street<br/>Winder, GA 30680</a></p>
                <p><a href="tel:+14704293969" rel="noreferrer">(470)-429-3969</a></p>
                <div id="hours-location-buttons" className="button-box" >
                <a href="https://goo.gl/maps/nNumfvJagawNah9R9" target="_blank" rel="noreferrer" className="btn btn--orange">Come See Us</a>
                </div>
            </div>
            <div aria-label="Scroll to Contact Section" onClick={() => scrollTo("#contact")} className="scroll-down">
                <p>Contact Us</p>
                <img alt="Icon: Scroll Down Arrow" src={scrollArrow}></img>
            </div>
        </section>
    )
  }
  
export default HoursLocation