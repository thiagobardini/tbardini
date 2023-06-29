import React, { useEffect } from "react";
import { MarkerClusterer } from "@react-google-maps/api";
import { data } from "./clusterCentroidsCopy";
import { Box } from "@mui/material";

const MyMapComponentCluster = ({ location }) => {
  const containerStyle = {
    height: "500px",
    width: "100%",
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
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.defer = true;
    script.async = true;
    script.onload = initMap;
    document.head.appendChild(script);
  };

  const initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: { lat: location.lat, lng: location.lng },
    });

    const infoWindow = new window.google.maps.InfoWindow({
      content: "",
      disableAutoPan: true,
    });

    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const locations = data.map((d) => ({
      lat: d.lat,
      lng: d.lon,
    }));
    // console.log(locations, "locations");

    const markers = locations.map((position, i) => {
      const label = labels[i % labels.length];
      const marker = new window.google.maps.Marker({
        position,
        label,
        map,
      });

      marker.addListener("click", () => {
        infoWindow.setContent(label);
        infoWindow.open(map, marker);
      });

      return marker;
    });

    new MarkerClusterer(map, markers, {
      // imagePath:
      //   "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
      map: map,
      position: { lat: location.lat, lng: location.lng },
      title: "Uluru",
    });
  };

  return (
    <Box>
      <div id="map" style={containerStyle}></div>
    </Box>
  );
};

export default MyMapComponentCluster;
