import * as React from "react";
import gringoIcon from "../assets/images/gringo-icon-lg-orange.svg";

// markup
const Jobs = (props) => {

    const closeJobPopup = () => {
        document.body.classList.add("fade-out");
        setTimeout(function() {
            document.body.classList.remove("modal-open");
            props.handleClose();
            document.body.classList.remove("fade-out");
        },250);
    }

    if(props.show) {
        document.body.classList.add("modal-open");
        return (
            <div id="jobs" className="popup">
                <div className="content">
                    <span className="close-popup" onClick={closeJobPopup}>&times;</span>
                    <img alt="Icon: Smokey Gringo Mask" src={gringoIcon} />
                    <h1>Join the Team!</h1>
                    <p>Smokey Gringo, a place where southern hickory-smoked meats mingle with salsa, cheese dip, lime, and cilantro. Smokey, savory, tender, and spicy elements. We are looking for fun, hard-working, and outgoing people who enjoy serving others. We work as a team daily to serve customers. Everyone is trained for all positions and throughout your shift, you may be asked to complete many different tasks. Whether it"s helping out in the dining room, building plates, or washing dishes; we work together as a team to create an experience that will make the guests excited to plan a second visit. If you feel lead to join our team, that makes us excited! Please follow the link below to fill out the application and we hope to serve with you soon.</p>
                    <p><a onClick={closeJobPopup} target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeu3p61CMrmHWPCThxJB3v1rVZ8LDRq21hR6mbvwdeuo8lnOQ/viewform?usp=sf_link--" rel="noreferrer" className="btn btn--orange">Apply</a></p>
                </div>
            </div>
        )
    } else {
        return null
    }

  }
  
export default Jobs