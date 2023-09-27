import React, { useEffect, useState } from "react";
import { MapContainer, Polygon, GeoJSON, Tooltip } from "react-leaflet";
import data from "../IndianData/Indian_States.json";
import "leaflet/dist/leaflet.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

const IndiaMap = () => {
  
  useEffect(() => {
    AOS.init();
  }, [])
  // const [jsonData, setJsonData] = useState({});
  const currentStates = ["Rajasthan", "Tamil Nadu", "Uttar Pradesh"];
  // const [hoveredState, setHoveredState] = useState(null);

  useEffect(() => {
    // Set jsonData when the component mounts
    // const jsonData = data;
    // setJsonData(jsonData);
    // console.log("JSOND: ", jsonData);
    console.log("JSON: ", data);
  }, []);

  return (
    <div data-aos="zoom-in">
      <MapContainer 
        center={[22.5, 80]}
        zoom={4.5}
        style={{ height: "100vh", width: "100vw" }}
      >
        <GeoJSON
          data={data}
          // onEachFeature={(feature, layer) => {
          //   layer.on("click", () => {
          //     const stateName = feature.properties.NAME_1;
          //     console.log(stateName);
          //     // window.location.href = `/state-link/${stateName}`;
          //   });
            // Add mouseover and mouseout event handlers
            // layer.on({
            //   mouseover: () => setHoveredState(feature.properties.NAME_1),
            //   mouseout: () => setHoveredState(null),
            // });
          // }}
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
                    fillColor: "#000",
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    dashArray: 3,
                    color: "#000",
                  }}
                  
                  positions={coordinates}
                  eventHandlers={{
                    click: (e) => {
                      const stateName = state.properties.NAME_1.split(" ")
                        .join("")
                        .toLowerCase();
                      console.log("Clicked " + stateName);
                      window.location.href = `/state-link/${stateName}`;
                    },
                  }}
                >
                  {/* Add Tooltip for hover effect */}
                  {/* {hoveredState === state.properties.NAME_1 && (
                    )} */}
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
