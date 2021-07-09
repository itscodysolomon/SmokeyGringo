import * as React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import lunchDinnerMenu from "../assets/docs/SmokeyGringo_Menu.pdf";
import barMenu from "../assets/docs/SmokeyGringo_Bar_Menu.pdf";
import scrollArrow from "../assets/images/scroll-down-arrow.svg";

// markup
const Menu = () => {
    return (
        <section id="menu">
            <div className="content">
                <h1>Menu</h1>
                <p>Check out our menus below!<br/><a href="https://www.grubhub.com/restaurant/smokey-gringo-49-n-jackson-st-winder/2534512" target="_blank" rel="noreferrer">order online</a></p>
                <div id="menu-buttons" className="button-box" >
                    <a href={lunchDinnerMenu} target="_blank" rel="noreferrer" className="btn btn--white">Lunch &amp; Dinner</a>
                    <a href={barMenu} target="_blank" rel="noreferrer" className="btn btn--white">Bar</a>
                </div>
            </div>
            <div aria-label="Scroll to Hours &amp; Location Section" onClick={() => scrollTo("#hoursLocation")} className="scroll-down">
                <p>Hours &amp; Location</p>
                <img alt="Icon: Scroll Down Arrow" src={scrollArrow}></img>
            </div>
        </section>
    )
  }
  
export default Menu