import React, { useEffect, useState } from "react";
import { MapContainer, Polygon, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from "../components/IndianData/india_state_geo.json";

const IndiaMap = () => {
  const [jsonData, setJsonData] = useState({});
  const currentStates = ["Rajasthan", "Tamil Nadu", "Uttar Pradesh"];

  useEffect(() => {
    // Set jsonData when the component mounts
    const jsonData = data;
    setJsonData(jsonData);
    console.log("JSOND: ", jsonData);
    console.log("JSON: ", data);
  }, []);

  return (
    <div>
      <MapContainer
        center={[22.5, 80]}
        zoom={4.5} // Set the initial zoom level
        style={{ height: "100vh", width: "100vw" }}
      >
        <GeoJSON
          data={data}
          onEachFeature={(feature, layer) => {
            layer.on("click", () => {
              const stateName = feature.properties.NAME_1;
              console.log(stateName);
              // window.location.href = `/state-link/${stateName}`;
            });
          }}
        />

        {data.features.map((state, index) => {
          for (let i = 0; i < currentStates.length; i++) {

            if (state.properties.NAME_1 === currentStates[i]) {

              // Inside the map function
              const coordinates = state.geometry.type === "MultiPolygon"
              ? state.geometry.coordinates.map(polygon => polygon[0].map(item => [item[1], item[0]]))
              : [state.geometry.coordinates[0].map(item => [item[1], item[0]])];

              return (
                <Polygon
                  pathOptions={{
                    fillColor: "000",
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    dashArray: 3,
                    color: "white",
                  }}
                  positions={coordinates}
                  eventHandlers={{
                    click: (e) => {
                      const stateName = state.properties.NAME_1.split(" ").join("").toLowerCase();
                      console.log("Clicked " + stateName);
                      window.location.href = `/state-link/${stateName}`;
                    },
                  }}
                />
              );
            }
          }
        })}
      </MapContainer>
    </div>
  );
};

export default IndiaMap;