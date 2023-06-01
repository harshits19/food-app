import { useEffect } from "react";

const RestMenuNav = (props) => {
  const { data } = props;
  let menuNavClasses = "menu-drawer";
  let backdrop;
  if (props.open) {
    menuNavClasses = "menu-drawer open";
    backdrop = <div className="backdrop" onClick={props.toggle}></div>;
    document?.body?.classList?.add("menuOpen");
  } else if (!props.open && document?.body?.classList?.contains("menuOpen")) {
    document?.body?.classList?.remove("menuOpen");
  }
  var allRestaurants = [];
  data?.map((items) => {
    const obj = {
      title: items.card.card.title,
      qty:
        items?.card?.card?.itemCards?.length ||
        items?.card?.card?.categories?.length,
    };
    allRestaurants.push(obj);
  });
  allRestaurants = allRestaurants.filter((x) => x.title !== undefined);
  useEffect(() => {
    allRestaurants.map((item) => {
      const idxes = document.getElementById(item.title);
      const btn = document.getElementsByClassName(item.title)[0];
      btn.addEventListener("click", () => {
        idxes.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);
  return (
    <>
      <div className={menuNavClasses}>
        <div className="menuNavContainer" id="menuNavContainer">
          {allRestaurants.map((restaurant) => {
            return (
              <div
                className="menuNavItems"
                key={restaurant.title}
                onClick={props.toggle}>
                <span className={restaurant.title}>{restaurant.title}</span>
                <span>{restaurant.qty}</span>
              </div>
            );
          })}
        </div>
      </div>
      {backdrop}
    </>
  );
};
export default RestMenuNav;
