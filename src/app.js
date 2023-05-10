import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutComp from "./components/AboutComp";
import ErrorComp from "./components/ErrorComp";
import ProfileComp from "./components/ProfileComp";
import CartComp from "./components/CartComp";
import RestaurantMenuComp from "./components/RestaurantMenuComp";
import Shimmer from "./components/HomePageShimmer";
import SearchComp from "./components/SearchComp";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import reduxStore from "./utils/reduxStore";

//Lazy loading
// import Offers from "./components/Offers";
const OffersComp = lazy(() => import("./components/OffersComp"));

/*wrapping whole app in provider so that we can use redux-store anywhere */
const Applayout = () => {
  return (
    <Provider store={reduxStore}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <ErrorComp />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "about",
        element: <AboutComp />,
        children: [
          {
            path: "profile",
            //dont write /about/profile or/profile/
            element: <ProfileComp />,
          },
        ],
      },
      {
        path: "/offers",
        element: (
          <Suspense fallback={<Shimmer />}>
            <OffersComp />
          </Suspense>
        ),
      }, //to dynamic/lazy load, wrap the component in suspense tag
      { path: "/restaurants/:resId", element: <RestaurantMenuComp /> },
      {
        path: "/search",
        element: <SearchComp />,
      },
      {
        path: "/cart",
        element: <CartComp />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Applayout />);
root.render(<RouterProvider router={appRouter} />);
