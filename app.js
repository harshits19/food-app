import React from "react";
import ReactDOM from "react-dom/client";
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
const Header = () => {
  return (
    <div className="header">
      <div className="logo"></div>
      <div className="profile"></div>
      <div className="search"></div>
    </div>
  );
};
const Body = () => {
  return <h2>Body</h2>;
};
const Footer = () => {
  return <h2>Footer</h2>;
};
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
