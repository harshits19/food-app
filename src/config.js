/* Config file used to store the hard coded data, which is used in multiple files */
export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const RESTAURANT_MENU_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=";
export const ALL_RESTAURANT_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1522426&lng=79.92067159999999&page_type=DESKTOP_WEB_LISTING";

export const resList = [
  {
    type: "restaurant",
    data: {
      id: "1",
      name: "KFC",
      area: "Koramangala",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    },
  },
  {
    type: "restaurant",
    data: {
      id: "2",
      name: "Meghana Foods",
      area: "Koramangala",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
      cuisines: [
        "Biryani",
        "Andhra",
        "South-Indian",
        "North-Indian",
        "Chinese",
        "Seafood",
      ],
    },
  },
  {
    type: "restaurant",
    data: {
      id: "3",
      name: "Kannur Food Point",
      area: "Tavarekere",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
      cuisines: ["Kerala", "Chinese"],
    },
  },
  {
    type: "restaurant",
    data: {
      id: "4",
      name: "Call Me Chow",
      area: "Koramangala",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "soegobqsiqvhmkfvnnkj",
      cuisines: ["Chinese", "Pan-Asian"],
    },
  },
  {
    type: "restaurant",
    data: {
      id: "5",
      name: "Kannur food kitchen",
      area: "BTM Layout",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "a27weqanhnszqiuzsoik",
      cuisines: ["Kerala", "Biryani", "Beverages"],
    },
  },
  {
    type: "restaurant",
    data: {
      id: "6",
      name: "Roti Wala",
      area: "Koramangala",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "f99d05e4f7884caa8646c70b0b752c7a",
      cuisines: ["Home Food", "North Indian", "Thalis"],
    },
  },
  {
    type: "restaurant",
    data: {
      id: "7",
      name: "Leon's - Burgers & Wings (Leon Grill)",
      area: "Koramangala",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "r4ufflqojich0r29efvc",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
    },
  },
  {
    type: "restaurant",
    data: {
      id: "48",
      name: "Hotel Empire",
      area: "Koramangala",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "un4omn7rcunkmlw6vikr",
      cuisines: ["North Indian", "Kebabs", "Biryani"],
    },
  },
  {
    type: "restaurant",
    data: {
      id: "9",
      name: "Biryani Pot",
      area: "Btm Layout",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "mdipoyzfzsa7n7igskht",
      cuisines: ["North Indian", "Biryani"],
    },
  },
  {
    type: "restaurant",
    data: {
      id: "10",
      name: "The Coorg Food Co.",
      area: "Koramangala",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "ej90ytd5x7ffyl6ii7cn",
      cuisines: ["South Indian"],
    },
  },
];
