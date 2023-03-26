import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="headers" id="myHeader">
        <nav>
          <a className="navlogo">food-app</a>
          <div className="navtoggle">
            <i className="fas fa-bars"></i>
          </div>
          <ul className="navlist">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
