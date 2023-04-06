import React from "react";
import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <>
      <h1>About Us</h1>
      <Outlet />
      {/* Instead of using outlet we can simply import the <Profile /> component */}
    </>
  );
};

export default About;
