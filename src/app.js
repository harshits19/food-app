import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Offers from "./components/Offers";
import Error from "./components/Error";
import Profile from "./components/Profile";
import RestaurantView from "./components/RestaurantView";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

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
      <Outlet />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", //dont write /about/profile or/profile/
            element: <Profile />,
          },
        ],
      },
      { path: "/offers", element: <Offers /> },
      { path: "/restaurants/:resId", element: <RestaurantView /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Applayout />);
root.render(<RouterProvider router={appRouter} />);
