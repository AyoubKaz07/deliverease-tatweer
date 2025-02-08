"use client";
import React, { useMemo, useRef } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "24px",
};

const center = {
  lat: 35.19431838543188,
  lng: -0.6214034557342529,
};

export default function TrackingMap() {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useLoadScript({
    id: "DEMO_MAP_ID",
    googleMapsApiKey: googleMapsApiKey,
    places: ["map"],
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const mapRef = useRef(null);

  //   // Create an AdvancedMarkerView
  //   async function CreateMArker() {
  //     if (isLoaded && map) {
  //       const { AdvancedMarkerElement } = await google.maps.importLibrary(
  //         "marker"
  //       );
  //       const advancedMarker = new AdvancedMarkerElement({
  //         position: center,
  //         map: map,
  //         title: "google-map-script",
  //       });

  //       console.log("advancedmarker", advancedMarker);
  //     }
  //   }
  //   CreateMArker();
  // }, [isLoaded, map]);

  //   const onUnmount = React.useCallback(function callback(map) {
  //     setMap(null);
  //   }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={8}
      onLoad={onLoad}
      options={{
        mapTypeControl: false,
        streetViewControl: false,
      }}
      //   onUnmount={onUnmount}
    />
  ) : (
    <></>
  );
}
