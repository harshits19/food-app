import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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

const Applayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
