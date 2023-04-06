import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Profile from "./components/Profile";
import SearchComp from "./components/SearchComp";
import RestaurantView from "./components/RestaurantView";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import { lazy, Suspense } from "react";

//Lazy loading
// import Offers from "./components/Offers";
const Offers = lazy(() => import("./components/Offers"));

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
        path: "about",
        element: <About />,
        children: [
          {
            path: "profile",
            //dont write /about/profile or/profile/
            element: <Profile />,
          },
        ],
      },
      {
        path: "/offers",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Offers />
          </Suspense>
        ),
      }, //to dynamic/lazy load, wrap the component in suspense tag
      { path: "/restaurants/:resId", element: <RestaurantView /> },
      {
        path: "/search",
        element: <SearchComp />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Applayout />);
root.render(<RouterProvider router={appRouter} />);
