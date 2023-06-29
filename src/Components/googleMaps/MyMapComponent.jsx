import React, { useEffect } from "react";

const MyMapComponent = ({ location }) => {
  console.log(location, "center in MyMapComponent");
  const containerStyle = {
    height: "300px",
    width: "500px",
  };

  useEffect(() => {
    if (window.google) {
      // Se a API do Google Maps já estiver carregada
      initMap();
    } else {
      // Se a API do Google Maps ainda não tiver sido carregada
      loadGoogleMapsScript();
    }
  }, [location]);

  const loadGoogleMapsScript = () => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
  };

  const initMap = () => {
    // const position = { lat: -25.344, lng: 131.031 };

    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: location.lat, lng: location.lng },

      zoom: 15,
      // https://developers.google.com/maps/documentation/javascript/reference/map#MapTypeId
      mapId: "MAP_ID",

      // mapId: "DEMO_MAP_ID",
    });

    // map.setTilt(45);
    const marker = new window.google.maps.Marker({
      map: map,
      position: { lat: location.lat, lng: location.lng },
      title: "Uluru",
    });
  };

  return (
    <div>
      <div id="map" style={containerStyle}></div>
    </div>
  );
};

export default MyMapComponent;
