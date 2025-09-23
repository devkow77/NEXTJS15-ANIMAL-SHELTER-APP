import { Header, JoinToUs, Team, Baner } from "@/components/sections/about";
import React from "react";

const About = () => {
  return (
    <div className="space-y-16 md:space-y-32">
      <Header />
      <Team />
      <Baner />
      <JoinToUs />
    </div>
  );
};

export default About;
