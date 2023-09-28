import React, { useEffect, useState, useRef } from "react";
import { MapContainer, Polygon, GeoJSON, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from "../IndianData/UpdateIndiaGeo.json";

const IndiaMap = () => {
  const [jsonData, setJsonData] = useState({});
  const currentStates = ["Rajasthan", "Tamil Nadu", "Uttar Pradesh"];
  const mapRef = useRef(null); // Create a ref for the map

  useEffect(() => {
    // Set jsonData when the component mounts
    const jsonData = data;
    setJsonData(jsonData);
    console.log("JSOND: ", jsonData);
    console.log("JSON: ", data);
  }, []);

  // Define a function to handle zoom and load data
  const handleStateClick = (state) => {
    const stateName = state.properties.NAME_1.split(" ").join("").toLowerCase();
    console.log("Clicked " + stateName);

    // Zoom to the clicked state
    const map = mapRef.current;
    if (map) {
      map.flyToBounds(state.getBounds(), { duration: 1.5 });
    }

    // Load data for the clicked state (replace with your data-loading logic)
    // Example: Fetch data from an API
    // fetch(`/api/state-data/${stateName}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Loaded data for state:", stateName, data);
    //     // Handle data accordingly
    //   })
    //   .catch((error) => {
    //     console.error("Error loading data:", error);
    //   });
  };

  return (
    <div>
      <MapContainer
        ref={mapRef}
        center={[22.5, 80]}
        zoom={4.5}
        style={{ height: "100vh", width: "100vw" }}
      >
        <GeoJSON
          data={data}
          onEachFeature={(feature, layer) => {
            layer.on("click", () => {
              handleStateClick(feature);
            });
          }}
        />

        {data.features.map((state, index) => {
          for (let i = 0; i < currentStates.length; i++) {
            if (state.properties.NAME_1 === currentStates[i]) {
              // Inside the map function
              const coordinates =
                state.geometry.type === "MultiPolygon"
                  ? state.geometry.coordinates.map((polygon) =>
                      polygon[0].map((item) => [item[1], item[0]])
                    )
                  : [
                      state.geometry.coordinates[0].map((item) => [
                        item[1],
                        item[0],
                      ]),
                    ];

              return (
                <Polygon
                  key={index}
                  pathOptions={{
                    fillColor: "000",
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    dashArray: 3,
                    color: "white",
                  }}
                  positions={coordinates}
                >
                  <Tooltip>{state.properties.NAME_1}</Tooltip>
                </Polygon>
              );
            }
          }
        })}
      </MapContainer>
    </div>
  );
};

export default IndiaMap;
