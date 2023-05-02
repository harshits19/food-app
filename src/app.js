import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import RestaurantView from "./components/RestaurantView";
import Shimmer from "./components/Shimmer";
import NewSearchComp from "./components/NewSearchComp";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import reduxStore from "./utils/reduxStore";

//Lazy loading
// import Offers from "./components/Offers";
const Offers = lazy(() => import("./components/Offers"));

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
        element: <NewSearchComp />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Applayout />);
root.render(<RouterProvider router={appRouter} />);
