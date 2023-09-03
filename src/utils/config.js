/* Config file used to store the hard coded data, which is used in multiple files */
const proxyVar = "https://corsproxy.io/?"; //for production
// const proxyVar = ""; //for dev builds only
const mediaQuery = window.matchMedia("(max-width: 768px)");
export let IMG_CDN_URL = null;
if (mediaQuery.matches)
  IMG_CDN_URL =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/";
else
  IMG_CDN_URL =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const RESTAURANT_MENU_URL =
  proxyVar +
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4633953&lng=80.3554247&restaurantId=";

export const ALL_RESTAURANT_URL =
  "https://dl.dropboxusercontent.com/scl/fi/xdzxj7mch6nvq78fa7b82/newHomepageAPI.json?rlkey=vwigv90bs7zs7ooupsbkzc0f7";
export const MOB_RESTAURANT_URL =
  "https://dl.dropboxusercontent.com/scl/fi/lpbqfclgfszl0gqbz28j8/newHomepageMobileAPI.json?rlkey=f7vqyuchitu4z6dajbxbfe2ca";

export const HOMEPAGE_REST_URL =
  proxyVar +
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4633953&lng=80.3554247";
export const PAYMENTS_PAGE_URL =
  proxyVar +
  "https://www.swiggy.com/dapi/offers/payment?lat=26.4633953&lng=80.3554247&offset=0";
export const CAROUSEL_IMG_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/";
export const RESTAURANT_SEARCH_URL =
  proxyVar +
  "https://www.swiggy.com/dapi/restaurants/search/suggest?lat=26.4633953&lng=80.3554247&str=";
export const RESTAURANT_PRE_SEARCH =
  proxyVar +
  "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=26.4633953&lng=80.3554247";
