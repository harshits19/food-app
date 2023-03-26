import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import BannerIntro from "./components/BannerIntro";
import RestCaraousal from "./components/RestCarousal";

/* 
        Header
         - logo
         -profile
         -search
        Body
         -banner big
         -carausal
         -resturant cards
           -restaurant pic
           -name
           -rating
           -tags
         -Explore tab
          -local food card
         -Top restro cards
         -app banner
        Footer
         - credits
         
*/
const Body = () => {
  return (
    <>
      <BannerIntro />
      <RestCaraousal />
    </>
  );
};
const Footer = () => {
  return <h2>Footer</h2>;
};
const Applayout = () => {
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
