import * as React from "react";
import Layout from "../components/layout";
import About from "../components/about";
import Menu from "../components/menu";
import HoursLocation from "../components/hoursLocation";
import Contact from "../components/contact";
import AlwaysTuesday from "../components/alwaysTuesday";
import Mexicue from "../components/mexicue";
import "../styles/reset.css";
import "../styles/main.scss";


const HomePage = () => {
    return (
      <Layout>
          <Mexicue></Mexicue>
          <About></About>
          <Menu></Menu>
          <HoursLocation></HoursLocation>
          <Contact></Contact>
          <AlwaysTuesday></AlwaysTuesday>
      </Layout>
    )
  }
  
export default HomePage