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
  const handleStateClick = async (state, centerCoords) => {
    const stateName = state.properties.ST_NM.split(" ").join("").toLowerCase();
    console.log("Clicked " + stateName);

    const map = mapRef.current;
    if (map) {
      // Fade out the map
      
      map.getPane("mapPane").style.transition = "opacity 1s ease-in-out";
      map.getPane("mapPane").style.opacity = 0;
      setTimeout(() => {
        // Fly to the new bounds
        map.flyToBounds(centerCoords, { duration: 1 });
  
        // Restore opacity after the fly animation
        setTimeout(() => {
          map.getPane("mapPane").style.opacity = 1;
          map.getPane("mapPane").style.transition = "none";
        }, 1500);
      }, 200);
    }
    setTimeout(() => {
      window.location.href = `/state-link/${stateName}`;
    }, 1200); 
  };

  return (
    <div>
      <MapContainer
        ref={mapRef}
        center={[22.5, 80]}
        zoom={4.5}
        style={{ height: "100vh", width: "100vw" }}
        scrollWheelZoom={false}
      >
        <GeoJSON
          data={data}
          onEachFeature={(feature, layer) => {
            layer.on("click", () => {
              const bounds = layer.getBounds();
              handleStateClick(feature, bounds);
            });
            layer.bindTooltip(feature.properties.ST_NM, {
              permanent: false,
              direction: "center",
              opacity: 0.7,
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
