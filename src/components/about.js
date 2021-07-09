import * as React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import scrollArrow from "../assets/images/scroll-down-arrow.svg";

// markup
const About = () => {
    return (
        <section id="about">
            <div className="content">
                <h1>About US</h1>
                <p>Food is an intimate action. Every day we share a meal with people and maybe we don’t really understand the depths of what’s happening. Food has the ability to make walls vanish, tensions fall, and hearts reunite. Down to what the core of what food is, it's only fuel; it can be gray paste with no flavor. It’s purely to give us fuel to do the next task. Salts, vinegar, oils, spices, and different cooking methods are what give depth to our dishes. The people we share these dishes with are the true prize. Smokey Gringo is a place that exercises that method.</p>
            </div>
            <div aria-label="Scroll to Menu Section" onClick={() => scrollTo('#menu')} className="scroll-down">
                <p>Check out our Menu</p>
                <img alt="Icon: Scroll Down Arrow" src={scrollArrow}></img>
            </div>
        </section>
    )
  }
  
export default About