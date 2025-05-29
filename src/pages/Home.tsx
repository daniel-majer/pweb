import React from "react";
import { Description } from "../components/Description";
import { Experiences } from "../components/Experiences";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <React.Fragment>
      <Description />
      <Experiences />
      <Projects />
      
    </React.Fragment>
  );
};
