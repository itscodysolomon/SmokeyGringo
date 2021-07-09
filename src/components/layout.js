import React from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';
import logo from "../assets/images/smokey-gringo-logo.png";
import icon from "../assets/images/smokey-gringo-icon.svg";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import SEO from "../components/seo";

const Layout= ({children}) => {

  return (
    <div id="wrapper">
      <SEO></SEO>
    <header>
        <img src={logo} alt="Smokey Gringo Logo" title="Smokey Gringo Logo" />
        <nav>
            <a href="#about" aria-label="Scroll to About Section" onClick={(e) => {e.preventDefault(); scrollTo('#about')}}>About</a>
            <a href="#menu" aria-label="Scroll to Menu Section" onClick={(e) => {e.preventDefault(); scrollTo('#menu')}}>Menu</a>
            <a href="#hoursLocation" aria-label="Scroll to Hours &amp; Location Section" onClick={(e) => {e.preventDefault(); scrollTo('#hoursLocation')}}>Hours &amp; Location</a>
            <a href="contact" aria-label="Scroll to Contact Section" onClick={(e) => {e.preventDefault(); scrollTo('#contact')}}>Contact</a>
        </nav>
      </header>
      <main>
      {children}
      </main>
      <footer>
        <nav>
            <div id="social-links">
                <a aria-label="Link to Smokey Gringo Instagram" href="https://www.facebook.com/Smokey-Gringo-286585332079340/" target="_blank" rel="noreferrer"><FaFacebookSquare size="2.5rem" className="icon--social" /></a>
                <a aria-label="Link to Smokey Gringo Facebook" href="https://www.instagram.com/smokeygringo/" target="_blank" rel="noreferrer"><FaInstagramSquare size="2.5rem" className="icon--social" /></a>
                <a aria-label="Link to Smokey Gringo Twitter" href="https://twitter.com/SmokeyGringo" target="_blank" rel="noreferrer"><FaTwitterSquare size="2.5rem" className="icon--social" /></a>
            </div>
            <a aria-label="Scroll to Top" onClick={() => scrollTo('#wrapper')}><img src={ icon } alt="Icon: Smokey Gringo Mask" title="Smokey Gringo Icon" /></a>
        </nav>
      </footer>
    </div>
  )
};

export default Layout;