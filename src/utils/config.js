/* Config file used to store the hard coded data, which is used in multiple files */
const proxyVar = "https://corsproxy.io/?"; //for production
// const proxyVar = ""; //for dev builds only
export const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
export const RESTAURANT_MENU_URL =
  proxyVar +
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.449923&lng=80.3318736&restaurantId=";

export const ALL_RESTAURANT_URL =
  "https://raw.githubusercontent.com/harshits19/harshits19.github.io/main/homepageData";

export const HOMEPAGE_REST_URL =
  proxyVar +
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.449923&lng=80.3318736&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const PAYMENTS_PAGE_URL =
  proxyVar +
  "https://www.swiggy.com/dapi/offers/payment?lat=26.4633953&lng=80.3554247&offset=0";

export const RESTAURANT_SEARCH_URL =
  proxyVar +
  "https://www.swiggy.com/dapi/restaurants/search/suggest?lat=26.4633953&lng=80.3554247&str=";

export const RESTAURANT_PRE_SEARCH =
  proxyVar +
  "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=26.449923&lng=80.3318736";
