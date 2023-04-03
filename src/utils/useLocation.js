import Geocode from "react-geocode";
import { useEffect, useState } from "react";
const useLocation = () => {
  const [address, setAddress] = useState({});
  const APIKEY = "AIzaSyAfSARyhuHejlqsP5pT1VMfUqVeWdyt_Zk";
  useEffect(() => {
    navigator.geolocation.getCurrentPosition = (position) => {
      console.log(position);
      setAddress({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    };
  }, []);
  Geocode.setRegion("in");
  Geocode.setLocationType("ROOFTOP");
  Geocode.setApiKey(APIKEY);
  Geocode.fromLatLng("48.8583701", "2.2922926").then(
    (response) => {
      const address = response.results[0].formatted_address;
      console.log(address);
    },
    (error) => {
      console.error(error);
    }
  );
  return (
    <h1>
      {address.lat}
      {address.lng}
    </h1>
  );
};
export default useLocation;
